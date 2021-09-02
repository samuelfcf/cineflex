import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SucessPage } from "./pages/SecessPage/SucessPage";
import { SelectMoviePage } from "./pages/SelectMoviePage/SelectMoviePage";
import { SelectSeatPage } from "./pages/SelectSeatPage/SelectSeatPage";
import { SelectSessionPage } from "./pages/SelectSessionPage/SelectSessionPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SelectMoviePage} />
        <Route exact path="/sessoes/:idMovie" component={SelectSessionPage} />
        <Route exact path="/assentos" component={SelectSeatPage} />
        <Route exact path="/sucesso" component={SucessPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
