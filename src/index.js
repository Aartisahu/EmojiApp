import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppNew from "./AppNew";
import history from './history';
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import {
  Router,
  Route,
} from "react-router-dom";

const router = (
  <Router  history={history}>
    <Route exact path='/' component={App}></Route>
    <Route exact path='/appnew/:title'  component={AppNew}></Route>
  </Router>)
ReactDOM.render(router, document.getElementById("root"));
