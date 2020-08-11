import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NoMatch from "./components/nomatch/NoMatch"
//*** Import the Welcome component ***//
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
//import { Route } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'

import {
  Switch,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Alison" />}
          />
          <Route
            path="/welcome/:name"
            render={(props) => <Welcome {...props} name={props.match.params.name} />}
          />
          <Route
            exact
            path="/clock"
            component={Clock}
          />
          <Route
            exact
            path="/contact"
            component={Contact}
          />
          <Route
            component={NoMatch}
          />
        </Switch>
      </div>
    );
  }
}
export default App;

