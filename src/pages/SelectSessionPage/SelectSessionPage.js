import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading/Loading";
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
    getSessionsList();
  }, []);

  if (!movie) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Header />

      <div className="select-session">
        <h3>Selecione o horário</h3>
        <div className="sessions">
          {movie.days.map(((day) => (
            <Weekday
              key={day.id}
              id={day.id}
              weekday={day.weekday}
              date={day.date}
              showtimes={day.showtimes} />
          )))}
        </div>

        <Baseboard
          title={movie.title}
          urlImage={movie.posterURL} />
      </div>
    </>
  );
}

export { SelectSessionPage }