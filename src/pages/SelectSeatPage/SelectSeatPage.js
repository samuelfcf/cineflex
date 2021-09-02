import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading/Loading";
import { Seat } from "./Seat";
import "./SelectSeatPage.css"

const SelectSeatPage = () => {

  const [seats, setSeats] = useState([]);
  const [baseboardData, setBaseboardData] = useState({
    movie: {
      title: "",
      posterURL: ""
    },
    day: {
      date: "",
      weekday: ""
    }
  });
  const { idSession } = useParams();

  const getSessionSeats = async () => {
    await axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`)
      .then((response) => {
        const data = response.data;
        const seats = data.seats;
        const baseboardData = data;
        setSeats(seats);
        setBaseboardData(baseboardData);
      })
  }

  useEffect(() => {
    getSessionSeats();
  }, []);

  if (seats.length === 0 && !baseboardData) {
    return (
      <Loading />
    );
  }

  console.log(baseboardData);


  return (
    <>
      <Header />

      <div className="select-seats">
        <h3>Seleciona o(s) assento(s)</h3>

        <div className="seats">
          {seats.map((seat) => (
            <Seat
              key={seat.id}
              id={seat.id}
              name={seat.name}
              isAvailable={seat.isAvailable} />
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
            <input type="text" placeholder="Digite seu nome..."></input>
          </div>
          <div>
            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..."></input>
          </div>
          <button>Reservar assento(s)</button>
        </div>
      </div>

      <Baseboard
        title={baseboardData.movie.title}
        urlImage={baseboardData.movie.posterURL}
        day={baseboardData.name}
        weekday={baseboardData.day.weekday} />
    </>
  );
}

export { SelectSeatPage }