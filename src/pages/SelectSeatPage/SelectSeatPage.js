import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Baseboard } from "../../components/Baseboard";
import { Loading } from "../../components/Loading/Loading";
import { Seat } from "./Seat";
import "./SelectSeatPage.css";

const SelectSeatPage = () => {

  const history = useHistory();

  const [seats, setSeats] = useState([]);
  const [baseboardData, setBaseboardData] = useState("");
  const [chosenSeats, setChosenSeats] = useState({ ids: [], seatNumbers: [] });
  const [inputFields, setInputFields] = useState("");

  const { idSession } = useParams();

  const getSessionSeats = async () => {
    await axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`)
      .then((response) => {
        const data = response.data;
        const baseboardData = data;
        const seats = data.seats;
        setSeats(seats);
        setBaseboardData(baseboardData);
      })
  }

  useEffect(() => {
    getSessionSeats();
  }, []);

  const selectSeat = (seatId, seatNumber) => {
    if (chosenSeats.ids.includes(seatId)) {
      chosenSeats.ids.splice(chosenSeats.ids.indexOf(seatId), 1);
      chosenSeats.seatNumbers.splice(chosenSeats.seatNumbers.indexOf(seatNumber), 1);
    } else {
      chosenSeats.ids = [...chosenSeats.ids, seatId];
      chosenSeats.seatNumbers = [...chosenSeats.seatNumbers, seatNumber];
      setChosenSeats({ ...chosenSeats });
    }
  }

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const validateCPF = (cpf) => {
    const rule = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
    return rule.test(cpf)
  }

  const reserveSeats = () => {

    if (!inputFields.name || !validateCPF(inputFields.cpf) || chosenSeats.ids.length === 0) {
      return alert("Por favor, informe os dados corretamente e/ou selecione no mínimo um assento");
    }

    const request = { ...chosenSeats, name: inputFields.name, cpf: inputFields.cpf }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", request)
      .then(() => {
        history.push("/sucesso", { orderData: request, movieData: baseboardData });
      })
      .catch(err => console.error(err));

    setInputFields({
      name: "",
      cpf: ""
    })
  }

  if (seats.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <div className="select-seats">
        <h3>Selecione o(s) assento(s)</h3>

        <div className="seats">
          {seats.map((seat) => (
            <Seat
              key={seat.id}
              seat={seat}
              selectSeat={selectSeat} />
          ))}
        </div>

        <div className="caption-seats">
          <div>
            <div className="seat selected"></div>
            Selecionado
          </div>
          <div>
            <div className="seat "></div>
            Disponível
          </div>
          <div>
            <div className="seat unavailable"></div>
            Indisponível
          </div>
        </div>

        <div className="form">
          <div>
            Nome do comprador:
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={inputFields.name}
              onChange={handleChange}
              placeholder="Digite seu nome..." />
          </div>
          <div>
            CPF do comprador:
            <input
              type="text"
              autoComplete="off"
              name="cpf"
              value={inputFields.cpf}
              onChange={handleChange}
              placeholder="Digite seu CPF..." />
          </div>
          <button onClick={reserveSeats}>Reservar assento(s)</button>
        </div>
      </div>

      {!baseboardData ? "" :
        <Baseboard
          title={baseboardData.movie.title}
          urlImage={baseboardData.movie.posterURL}
          day={baseboardData.name}
          weekday={baseboardData.day.weekday} />
      }
    </>
  );
}

export { SelectSeatPage }