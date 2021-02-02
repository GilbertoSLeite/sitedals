import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Analytics from 'react-router-ga';
import Layout from "./Layout/layout";

const hist = createBrowserHistory();

const histloca = hist.location.pathname;

if (histloca === '/') {
  hist.replace('/home');
  hist.push('/home');
  window.location.reload();
};

ReactDOM.render(
  <Router history={hist}>
    <Analytics id="UA-148941763-1">
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Analytics>
  </Router>,
  document.getElementById("root")
);