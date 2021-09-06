import styled from "styled-components";

const Baseboard = ({ urlImage, title, day, weekday }) => {

  return (
    <BaseboardCard>
      <MovieCard>
        <img src={urlImage} alt="" />
      </MovieCard>
      <SessionInfo>
        <h3>{title}</h3>
        {day !== undefined ? <h3>{`${weekday} - ${day}`}</h3> : ""}
      </SessionInfo>
    </BaseboardCard>
  );
}

const BaseboardCard = styled.div`
  height: 117px;
  width: 100%;
  border: 1px solid #9EADBA;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 20px;
  background-color: #DFE6ED;

  position:fixed;
  bottom: 0;
`

const MovieCard = styled.div`
  height: 89px;
  width: 64px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 72px;
    width: 48px;  
  }

  h3 {
    font-size: 26px;
  }
`

const SessionInfo = styled.div`
  font-size: 23px;
  color: #293845;
`

export { Baseboard }