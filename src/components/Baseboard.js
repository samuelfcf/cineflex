const Baseboard = ({ urlImage, title }) => {
  return (
    <div className="baseboard">
      <div className="movie-card">
        <img src={urlImage} alt="" />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export { Baseboard }