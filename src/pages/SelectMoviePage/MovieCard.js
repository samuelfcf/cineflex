import { Link } from "react-router-dom";

const MovieCard = ({ id, postUrl, name }) => {
  return (
    <Link to={`/sessoes/${id}`}>
      <div className="movie-card">
        <img src={postUrl} alt={name} />
      </div>
    </Link>
  )
}

export { MovieCard }