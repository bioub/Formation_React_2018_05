import React, { Component } from 'react';
import { desactivable } from './desactivable';

class Counter extends Component {

  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button onClick={this.increment}>{this.state.count}</button>
    );
  }
}

const CounterDesactivable = desactivable(Counter);

export { Counter, CounterDesactivable };
