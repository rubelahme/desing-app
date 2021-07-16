import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
