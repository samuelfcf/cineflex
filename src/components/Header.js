import { useLocation } from "react-router-dom";
import { Button } from "./Buttom";
import styled from "styled-components";


const Header = () => {

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? "" : <Button />}
      <HeaderCard>
        <h1>CINEFLEX</h1>
      </HeaderCard>
    </>
  )
}

const HeaderCard = styled.header`
  height: 67px;
  width: 100%;
  background-color: #C3CFD9;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  h1 {
    color: #E8833A;
    font-size: 34px;
  }
`

export { Header }