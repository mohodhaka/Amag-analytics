import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import bgImage from "assets/img/sidebar-2.jpg";
import logo from "logo.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {     
      if (prop.layout === "/simple") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}    
  </Switch>
);

export default function Simple({ ...rest }) {
  return (
    <div>
      {switchRoutes}
    </div>
  );
}
