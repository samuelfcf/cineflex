import { Baseboard } from "../../components/Baseboard";
import { Header } from "../../components/Header";
import "./SelectSessionPage.css";
import { Weekday } from "./Weekday";

const SelectSessionPage = () => {
  return (
    <>
      <Header />

      <div className="select-session">
        <h3>Selecione o horário</h3>
        <div className="sessions">
          <Weekday />
          <Weekday />
          <Weekday />
        </div>

        <Baseboard />
      </div>
    </>
  );
}

export { SelectSessionPage }