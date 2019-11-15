import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import l from '../pages/_layouts';

import store from '../store';

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

  const Layout = isAuthenticated ? l.DefaultLayout : l.AuthLayout;

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
