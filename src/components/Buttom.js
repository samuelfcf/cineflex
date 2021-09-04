import { useHistory } from "react-router-dom";
import BackButton from "../assets/backbutton.svg";

const Button = () => {

  const history = useHistory();

  return (
    <>
      <img className="back-button" onClick={() => history.goBack()} src={BackButton} alt="" />
    </>
  );
}

export { Button }