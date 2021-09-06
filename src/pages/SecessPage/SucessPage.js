import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const SucessPage = () => {

  const location = useLocation();
  const movieData = location.state.movieData;
  const orderData = location.state.orderData;

  return (
    <>
      <ConfirmInfo>
        <h3> Pedido feito <br /> com sucesso!</h3>

        <InformationsContainer>
          <div>
            <span>Filme e sessão</span>
            <div>
              <p>{movieData.movie.title}</p>
              <p>{movieData.day.date} {movieData.name}</p>
            </div>
          </div>
          <div>
            <span>Ingressos</span>
            <div>
              {orderData.seatNumbers.map((number, index) => (
                <p key={index}>Assento {number}</p>
              ))}
            </div>
          </div>
          <div>
            <span>Comprador</span>
            <div>
              <p>Nome: {orderData.name}</p>
              <p>CPF: {orderData.cpf}</p>
            </div>
          </div>
        </InformationsContainer>

        <Link to="/">
          <BackToHomeButton>Voltar para Home</BackToHomeButton>
        </Link>


      </ConfirmInfo>
    </>
  );
}

const ConfirmInfo = styled.div`
  * {
    text-decoration: none;
  }

  h3 {
  font-size: 24px;
  height: 110px;
  color: #247A6B;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  }
`

const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding-left: 28px;
  margin-bottom: 70px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span{
      font-size: 24px;
      font-weight: 700;
      color: #293845;
    }

    p {
      font-size: 22px;
      font-weight: 400;
      color: #293845;
    }
 }
`

const BackToHomeButton = styled.button`
  width: 225px;
  height: 42px;
  background-color: #E8833A;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { SucessPage }