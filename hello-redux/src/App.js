import React, { Component } from 'react';
import './App.css';
import { Hello, HelloDesactivable } from './Hello';
import { Horloge } from './Horloge';
import { ButtonToggle } from './ButtonToggle';
import HelloList from './HelloList';
import { Counter, CounterDesactivable } from './Counter';

class App extends Component {

  // Class property ESNext
  state = {
    showHorloge: true,
  };

  toggleButton = () => {
    this.setState({
      showHorloge: !this.state.showHorloge,
    });
  }

  /*
  constructor() {
    super();
    this.state = {
      showHorloge: true,
    };
    this.toggleButton = this.toggleButton.bind(this); // ES5
  }
  */

  render() {
    /*
    let horloge;
    if (this.state.showHorloge) {
      horloge = <Horloge />;
    }
    */
    return (
      <div className="App">
        <h2>Compteur simple</h2>
        <Counter />
        <h2>Compteur desactivable (via HOC)</h2>
        <CounterDesactivable show={true} />
      </div>
    );
  }
}

export default App;
