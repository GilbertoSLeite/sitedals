import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Analytics from 'react-router-ga';
import Layout from "./Layout/layout";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Analytics id="UA-148941763-1">
      <Switch>
        <Route path="/" component={Layout} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Analytics>
  </Router>,
  document.getElementById("root")
);