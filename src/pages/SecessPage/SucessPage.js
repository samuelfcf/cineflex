import { Link, useLocation } from "react-router-dom";
import "./SucessPage.css";

const SucessPage = () => {

  const location = useLocation();
  const movieData = location.state.movieData;
  const orderData = location.state.orderData;

  return (
    <>
      <div className="confirm-info">
        <h3> Pedido feito <br /> com sucesso!</h3>

        <div className="informations">
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
        </div>

        <Link to="/">
          <button>Voltar para Home</button>
        </Link>


      </div>
    </>
  );
}

export { SucessPage }