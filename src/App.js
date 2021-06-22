import "./sass/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Admin, Error404 } from "./components";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/fred">
            <Admin />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
