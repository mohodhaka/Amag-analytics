import  { Route, Redirect } from 'react-router-dom';

import React, { Component } from 'react';

import { useAuth } from "./Auth";

function AuthRoute ({ component: Component, ...rest }) {

  const { authTokens } = useAuth();

  return (
    <Route {...rest} render={(props) => (
      authTokens
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { referer: props.location }
          }} />
    )} />
  );
}


export default AuthRoute;
