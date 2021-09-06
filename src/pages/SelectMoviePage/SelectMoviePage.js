import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../../components/Loading/Loading";
import { MovieCard } from "./MovieCard";

const SelectMoviePage = () => {

  const [movies, setMovies] = useState("");

  const getMovies = async () => {
    await axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
      .then((response) => {
        const data = response.data;
        const movies = data;
        setMovies(movies);
      })
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (!movies) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <SelectMovieContainer>
        <h3>Selecione o filme</h3>
        <div>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.name}
              postUrl={movie.posterURL} />
          ))}
        </div>
      </SelectMovieContainer>
    </>
  )
}

const SelectMovieContainer = styled.div`
  margin-top: 60px;

  h3 {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#293845;
  font-size: 24px;
}

div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 38px;
}
`

export { SelectMoviePage }