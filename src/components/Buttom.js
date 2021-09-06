import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../assets/backbutton.svg";

const Button = () => {

  const history = useHistory();

  return (
    <>
      <StyledButton className="back-button" onClick={() => history.goBack()} src={BackButton} alt="back-button" />
    </>
  );
}

const StyledButton = styled.img`
  width: 35px;
  position: fixed;
  left: 20px;
  top: 18px;
  z-index: 2;

  color: #E8833A;
`

export { Button }