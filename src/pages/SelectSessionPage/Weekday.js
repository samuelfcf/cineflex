import { Link } from "react-router-dom";
import styled from "styled-components";

const Weekday = ({ weekday, date, showtimes }) => {

  return (
    <StyledWeekday>
      {weekday} {date}
      <div>
        {showtimes.map((showtime) => (
          <Link to={`/assentos/${showtime.id}`}>
            <button key={showtimes.id}>{showtime.name}</button>
          </Link>
        ))}
      </div>
    </StyledWeekday>
  );
}

const StyledWeekday = styled.div`
  height: 90px;
  display:flex;
  padding-left: 25px;
  padding-left: 25px;
  flex-direction: column;
  gap: 19px;

  font-size: 20px;
  color: #293845;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  button {
    height: 43px;
    width: 82px;
    margin: 0;
    font-size: 18px;
    color: #ffffff;
    background-color: #E8833A;
    border-radius: 3px;
    border: 0;
  }   

`

export { Weekday };