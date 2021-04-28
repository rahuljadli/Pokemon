
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/dashboard">
           dashboard
          </Route>
        </Switch>
  );
}

export default App;
