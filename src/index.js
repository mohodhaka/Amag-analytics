/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState }  from "react";
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

import "assets/css/material-dashboard-react.css?v=1.8.0";

import routes from "routes.js";

import { AuthContext } from "./Utils/Auth";


const hist = createBrowserHistory();


function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    // <Router history={hist}>
    //   <Switch>
    //     <Route exact path="/admin" component={Admin} />
    //     <Route exact path="/rtl" component={RTL} />
    //     <Route exact path="/login" component={Login} />
    //     <Redirect from="/" to="/admin/dashboard" />
    //     {/* <Route exact path="/register" component={Register} />
    //     <Redirect from="/" to="/admin/dashboard" /> */}
    //   </Switch>
    // </Router>
    // </AuthContext.Provider>

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

ReactDOM.render(
  <App/>
,
  document.getElementById("root")
);
