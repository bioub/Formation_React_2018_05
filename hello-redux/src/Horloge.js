import React, { Component } from 'react';

/* ES5
function Horloge() {}

Horloge.prototype.render = function() {
  return <div>{new Date()}</div>
}
*/

class Horloge extends Component {

  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this._intervalId = setInterval(() => {
      // this avec function === window
      // this avec => pas créé
      this.setState({ // mergeState
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  render() {
    // this.props.name
    return <div>{this.state.now.toLocaleTimeString()}</div>
  }
}

export {
  Horloge,
};
