import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonToggle extends Component {
  state = {
    on: this.props.on,
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
      <button onClick={this.toggle}>{this.state.on ? 'Off' : <i>On</i>}</button>
    );
  }
}

ButtonToggle.propTypes = {
  onToggle: PropTypes.func,
};

export {
  ButtonToggle,
};
