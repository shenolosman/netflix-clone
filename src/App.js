import "./App.scss";
import React from "react";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/register">
          {!user ? <Register /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/login">
          {!user ? <Login /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
