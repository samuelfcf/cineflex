const Weekday = ({ id, weekday, date, showtimes }) => {

  const ola = (idd, name) => {
    console.log(idd, name)
  }

  return (
    <div className="weekday">
      {weekday} {date}
      <div className="schedules">
        {showtimes.map((showtime) => (
          <button key={showtimes.id} id={showtimes.id} onClick={() => ola(showtime.id, showtime.name)} className="schedule">{showtime.name}</button>
        ))}
      </div>
    </div>
  );
}

export { Weekday };