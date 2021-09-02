import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import "./SelectSessionPage.css";
import { Weekday } from "./Weekday";

const SelectSessionPage = () => {

  const [movie, setMovie] = useState("")

  const { idMovie } = useParams();

  const getSessionsList = async () => {
    await axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`)
      .then((response) => {
        const data = response.data;
        const movie = data;
        setMovie(movie);
      });
  }

  useEffect(() => {
    getSessionsList()
  }, []);

  return (
    <>
      <Header />

      <div className="select-session">
        <h3>Selecione o horário</h3>
        <div className="sessions">
          <Weekday />
          <Weekday />
          <Weekday />
        </div>

        <Baseboard
          title={movie.title}
          urlImage={movie.posterURL} />
      </div>
    </>
  );
}

export { SelectSessionPage }