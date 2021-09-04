import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import "./SucessPage.css";

const SucessPage = () => {

  const location = useLocation();
  const movieData = location.state.movieData;
  const buyerData = location.state.buyerData;

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
              {buyerData.ids.map((seatId) => (
                <p>Assento {seatId}</p>
              ))}
            </div>
          </div>
          <div>
            <span>Comprador</span>
            <div>
              <p>Nome: {buyerData.name}</p>
              <p>CPF: {buyerData.cpf}</p>
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