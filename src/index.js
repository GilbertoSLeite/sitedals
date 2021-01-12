import React from "react";
import ReactDOM from "react-dom";
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/layout";

const hist = createBrowserHistory();

ReactGA.initialize('UA-148941763-1');

hist.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname + location.search); // Record a pageview for the given page
});

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Layout} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);