import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading/Loading";
import { MovieCard } from "./MovieCard";
import "./SelectMoviePage.css";

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
      <Header />
      <div className="select-movie">
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
      </div>
    </>
  )
}

export { SelectMoviePage }