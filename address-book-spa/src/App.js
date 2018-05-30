import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './HomePage';
import { Route, Switch, Link } from "react-router-dom";
import { Users } from './Users';
import { Horloge } from './Horloge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Menu</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
        <hr />
        {/* <Route path="/" component={HomePage} exact={true} /> */}
        {/* <Route path="/users" component={Users} /> */}
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/" component={HomePage} />
        </Switch>
        <hr />
        <Horloge />
      </div>
    );
  }
}

export default App;
