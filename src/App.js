import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SelectMoviePage } from "./pages/SelectMoviePage/SelectMoviePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SelectMoviePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
