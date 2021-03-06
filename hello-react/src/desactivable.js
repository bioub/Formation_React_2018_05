import React, { Component } from 'react';
import { ButtonToggle } from './ButtonToggle';

// Higher order component (hoc)
const desactivable = (InnerComponent) => {
  class Desactivable extends Component {
    state = {
      show: this.props.show,
    };

    toggle = () => {
      this.setState({
        show: !this.state.show,
      });

      // const cloneObj = {...this.state.show}; // ES9 REST properties
      // const cloneArray = [...ancienTableau]; // ES6
    }

    render() {
      const {show, ...innerProps} = this.props; // ES6 + ES9 SPREAD properties
      return (
        <div>
          {this.state.show && <InnerComponent {...innerProps} />}
          <ButtonToggle onToggle={this.toggle} on={this.state.show} />
        </div>
      );
    }
  }

  Desactivable.displayName = `Desactivable(${InnerComponent.name})`;

  return Desactivable;
};

export {
  desactivable,
};
