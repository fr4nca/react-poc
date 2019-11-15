import React from "react";
import { Switch, Route } from "react-router-dom";

import p from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={p.Home} />
      <Route path="/websites" component={p.Websites} />
    </Switch>
  );
};

export default Routes;
