import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Parent from './Parent'
import Ref from './Ref'
import HighOrderTest from './HighOrderTest'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/parent" component={Parent} />
          <Route path="/ref" component={Ref} />
          <Route path="/hoc" component={HighOrderTest} />
        </Switch>
      </Router>
    );
  }
}

export default App;
