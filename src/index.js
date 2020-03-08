import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Contributors from "./Contributors";
import SpecialThanks from "./SpecialThanks";
import TheyUsedIt from "./TheyUsedIt";
import TheyTalkedAboutIt from "./TheyTalkedAboutIt";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-less/semantic.less";
import ResponsiveContainer from "./Containers";

const routing = (
  <Router>
    <ResponsiveContainer>
      <Route exact path="/" component={Home} />
      <Route exact path="/contributors" component={Contributors} />
      <Route exact path="/special-thanks" component={SpecialThanks} />
      <Route exact path="/they-use-d-it" component={TheyUsedIt} />
      <Route exact path="/they-talk-ed-about-it" component={TheyTalkedAboutIt} />
    </ResponsiveContainer>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
