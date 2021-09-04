import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading/Loading";
import { Seat } from "./Seat";
import "./SelectSeatPage.css";

const SelectSeatPage = () => {

  const history = useHistory();

  const [seats, setSeats] = useState([]);
  const [baseboardData, setBaseboardData] = useState("");
  const [chosenSeats, setChosenSeats] = useState({ ids: [] });
  const [fields, setFields] = useState("");

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

  const selectSeat = (seatId) => {
    if (chosenSeats.ids.includes(seatId)) {
      chosenSeats.ids.splice(chosenSeats.ids.indexOf(seatId), 1);
    } else {
      chosenSeats.ids = [...chosenSeats.ids, seatId];
    }
  }

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }

  const validateCPF = (cpf) => {
    const rule = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
    return rule.test(cpf)
  }

  const reserveSeats = () => {

    if (!fields.name || !validateCPF(fields.cpf) || chosenSeats.ids.length === 0) {
      return alert("Por favor, informe os dados corretamente e/ou selecione no mínimo um assento");
    }

    const request = { ...chosenSeats, name: fields.name, cpf: fields.cpf }

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", request)
      .then(() => {
        history.push("/sucesso", { buyerData: request, movieData: baseboardData });
      })
      .catch(err => console.error(err));

    setChosenSeats({
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
      <Header />

      <div className="select-seats">
        <h3>Seleciona o(s) assento(s)</h3>

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
            <input required
              autoComplete="off"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Digite seu nome..." />
          </div>
          <div>
            CPF do comprador:
            <input required
              type="text"
              autoComplete="off"
              name="cpf"
              value={fields.cpf}
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