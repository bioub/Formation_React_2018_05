import React, { Component } from 'react';
import { desactivable } from '../decorators/desactivable';
import { connect } from 'react-redux';
import { counterIncrement } from '../actions';
import { selectCount } from '../selectors';

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

/*
class CounterRedux extends Component {
  increment = () => {
    this.props.dispatch(counterIncrement());
  }

  render() {
    return (
      <button onClick={this.increment}>{this.props.count}</button>
    );
  }
}
*/
const CounterRedux = ({increment, count}) => <button onClick={increment}>{count}</button>;

const mapStateToProps = (state, ownProps) => ({
  count: selectCount(state, ownProps.index),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(counterIncrement(1, ownProps.index)),
});

const CounterReduxContainer = connect(mapStateToProps, mapDispatchToProps)(CounterRedux);

const CounterReduxContainerDesactivable = desactivable(CounterReduxContainer);

export {
  Counter,
  CounterDesactivable,
  CounterRedux,
  CounterReduxContainer,
  CounterReduxContainerDesactivable
};
