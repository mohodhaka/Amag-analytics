import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Simple from "layouts/Simple.js";

import SignInSide from "views/Account/SignIn";
import Register from "views/Account/SignUp";

import AuthRoute from "./Utils/AuthRoute";

import "./assets/css/material-dashboard-react.css";

import routes from "routes.js";

import { AuthContext } from "./Utils/Auth";

const hist = createBrowserHistory();

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/login" component={SignInSide} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
        <Route path="/simple" component={Simple} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
