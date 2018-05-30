import React, { Component } from 'react';
import './App.css';
import { Counter, CounterDesactivable, CounterReduxContainer, CounterReduxContainerDesactivable } from './Counter';

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
        <h2>Compteur Redux</h2>
        <CounterReduxContainer index={0} />
        <CounterReduxContainer index={1} />
        <h2>Compteur Redux desactivable (via HOC)</h2>
        <CounterReduxContainerDesactivable />
      </div>
    );
  }
}

export default App;
