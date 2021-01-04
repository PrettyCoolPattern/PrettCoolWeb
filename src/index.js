import "./polyfills";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import { Router, Switch, Route } from "react-router-dom";

import { HashRouter } from "react-router-dom";
import "./App.scss"; 
import "./App.js";
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import reportWebVitals from "./reportWebVitals";

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

reportWebVitals();
renderApp(Main);
