import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import New from "./page/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
