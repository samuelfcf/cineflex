import { Link } from "react-router-dom";

const Weekday = ({ weekday, date, showtimes }) => {


  return (

    <div className="weekday">
      {weekday} {date}
      <div className="schedules">
        {showtimes.map((showtime) => (
          <Link to={`/assentos/${showtime.id}`}>
            <button key={showtimes.id} className="schedule">{showtime.name}</button>
          </Link>
        ))}
      </div>
    </div>

  );
}

export { Weekday };