import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SelectMoviePage } from "./pages/SelectMoviePage/SelectMoviePage";
import { SelectSessionPage } from "./pages/SelectSessionPage/SelectSessionPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SelectMoviePage} />
        <Route exact path="/filme" component={SelectSessionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
