import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonToggle extends Component {
  state = {
    on: true,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
    this.props.onToggle(this.state.on);
  }

  /*
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      on: !this.state.on,
    });
    this.props.onToggle(this.state.on);
  }
  */

  render() {
    return (
      <button onClick={this.toggle}>{this.state.on ? 'On' : <i>Off</i>}</button>
    );
  }
}

ButtonToggle.propTypes = {
  onToggle: PropTypes.func,
};

export {
  ButtonToggle,
};
