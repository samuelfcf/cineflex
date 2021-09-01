import { Header } from "../../components/Header";
import "./SucessPage.css";

const SucessPage = () => {
  return (
    <>
      <Header />

      <div className="confirm-info">
        <h3> Pedido feito <br /> com sucesso!</h3>

        <div className="informations">
          <div>
            <span>Filme e sessão</span>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </div>
          <div>
            <span>Ingressos</span>
            <div>
              <p>Assento 15</p>
              <p>Assento 16</p>
            </div>
          </div>
          <div>
            <span>Comprador</span>
            <div>
              <p>Nome: João da Silva Sauro</p>
              <p>CPF: 123.456.789-10</p>
            </div>
          </div>
        </div>

        <button>Voltar para Home</button>


      </div>
    </>
  );
}

export { SucessPage }