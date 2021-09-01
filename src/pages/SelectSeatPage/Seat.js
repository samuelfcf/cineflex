const Seat = ({ id, name }) => {
  return (
    <div className="seat">{id < 10 ? `0${name}` : `${name}`}</div>
  );
}

export { Seat }