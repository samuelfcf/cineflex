import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { SucessPage } from "./pages/SecessPage/SucessPage";
import { SelectMoviePage } from "./pages/SelectMoviePage/SelectMoviePage";
import { SelectSeatPage } from "./pages/SelectSeatPage/SelectSeatPage";
import { SelectSessionPage } from "./pages/SelectSessionPage/SelectSessionPage";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={SelectMoviePage} />
        <Route exact path="/sessoes/:idMovie" component={SelectSessionPage} />
        <Route exact path="/assentos/:idSession" component={SelectSeatPage} />
        <Route exact path="/sucesso" component={SucessPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
