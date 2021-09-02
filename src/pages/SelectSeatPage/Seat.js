const Seat = ({ id, name, isAvailable }) => {
  return (
    <div className={isAvailable ? "seat" : "seat unavailable"}>{id < 10 ? `0${name}` : `${name}`}</div>
  );
}

export { Seat }