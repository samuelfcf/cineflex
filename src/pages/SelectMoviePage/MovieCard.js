const MovieCard = ({ postUrl, name }) => {
  return (
    <div className="movie-card">
      <img src={postUrl} alt={name} />
    </div>
  )
}

export { MovieCard }