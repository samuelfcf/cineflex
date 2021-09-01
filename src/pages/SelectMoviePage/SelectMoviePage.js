import { Header } from "../../components/Header";
import { MovieCard } from "./MovieCard";
import "./SelectMoviePage.css";

const SelectMoviePage = () => {
  return (
    <>
      <Header />

      <div className="select-movie">
        <h3>Selecione o filme</h3>
        <div>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  )
}

export { SelectMoviePage }