import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layouts } from 'pages';

import { store } from 'store';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }: any) => {
  const {
    auth: { isAuthenticated },
  }: any = store.getState();

  if (!isAuthenticated && isPrivate) {
    /*
      Redirect to '/' if user is unauthenticated and route is private
    */
    return <Redirect to="/" />;
  }

  if (isAuthenticated && !isPrivate) {
    /*
    Redirect to '/dashboard' if user is authenticated and route is public (register and login)
    Can add logic to enable redirect to public routes that can be accessed even if user is authenticated
    */
    return <Redirect to="/dashboard" />;
  }

  {
    /*
    If authorization is implemented, add logic to redirect to different routes if authenticated user
    don't have permissions to certain pages such as company page
    */
  }

  {
    /*
    Set different layouts for public and private routes
    Can add logic to different layouts
    */
  }
  const Layout = isAuthenticated ? Layouts.DefaultLayout : Layouts.AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
