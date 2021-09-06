import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Baseboard } from "../../components/Baseboard";
import { Loading } from "../../components/Loading/Loading";
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
      <SelectSessionContainer>
        <h3>Selecione o horário</h3>
        <div className="sessions">
          {movie.days.map(((day) => (
            <Weekday
              key={day.id}
              weekday={day.weekday}
              date={day.date}
              showtimes={day.showtimes} />
          )))}
        </div>

        <Baseboard
          title={movie.title}
          urlImage={movie.posterURL} />
      </SelectSessionContainer>
    </>
  );
}

const SelectSessionContainer = styled.div`
  overflow-y: scroll;
  margin-top: 60px;
  margin-bottom: 120px;
  box-sizing: border-box;
  font-family: "Roboto";
  text-decoration: none;

  * {
    box-sizing: border-box;
    font-family: "Roboto";
    text-decoration: none;
  }

  h3 {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#293845;
    font-size: 24px;
  }

  div.sessions {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`

export { SelectSessionPage }