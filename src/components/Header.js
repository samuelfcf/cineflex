import { useLocation } from "react-router-dom";
import { Button } from "./Buttom";

const Header = () => {

  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/" ? "" : <Button />}
      <header>
        <h1>CINEFLEX</h1>
      </header>
    </>
  )
}

export { Header }