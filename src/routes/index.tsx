import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import * as p from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={p.Auth.SignIn} />
      <Route path="/register" component={p.Auth.SignUp} />

      <Route path="/dashboard" component={p.Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default Routes;
