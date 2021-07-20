import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Admin from './Component/Dashboard/Admin/Admin';
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
