const Baseboard = ({ urlImage, title, day, weekday }) => {

  return (
    <div className="baseboard">
      <div className="movie-card">
        <img src={urlImage} alt="" />
      </div>
      <div className="session-info">
        <h3>{title}</h3>
        {day !== undefined ? <h3>{`${weekday} - ${day}`}</h3> : ""}
      </div>
    </div>
  );
}

export { Baseboard }