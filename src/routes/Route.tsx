import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layouts } from 'pages';

import { store } from 'store';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }: any) => {
  const {
    auth: { isAuthenticated },
  }: any = store.getState();

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/dashboard" />;
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
