import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Admin from "./Component/Dashboard/Admin/Admin";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/Login/PrivateRoute";
export const ThemeContext = createContext();
function App() {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });

  return (
    <ThemeContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin/">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
