import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import * as p from 'pages';

const Routes: React.FC = (): any => {
  return (
    <Switch>
      {/* Non private routes */}
      <Route path="/" exact component={p.Auth.SignIn} />
      <Route path="/register" component={p.Auth.SignUp} />

      {/* Private routes */}
      <Route path="/dashboard" component={p.Dashboard} isPrivate />

      {/* 404 Route */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default Routes;
