import { useState } from "react"

const Seat = ({ seat, selectSeat }) => {

  const { id, name, isAvailable } = seat

  const className = isAvailable ? "seat" : "seat unavailable"

  const [selected, setSelected] = useState(className);

  const select = (seatStatus) => {
    if (seatStatus.includes("unavailable")) {
      return alert("Esse assento não está disponível!")
    }

    if (seatStatus.includes("selected")) {
      setSelected(className);
      selectSeat(id, name)
    } else {
      setSelected("seat selected");
      selectSeat(id, name)
    }
  }


  return (
    <div className={selected} onClick={() => select(selected)}>
      {id < 10 ? `0${name}` : `${name}`}
    </div>
  );
}

export { Seat }