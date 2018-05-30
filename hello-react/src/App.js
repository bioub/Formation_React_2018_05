import React, { Component } from 'react';
import './App.css';
import { Hello, HelloDesactivable } from './Hello';
import { Horloge, HorlogeDesactivable } from './Horloge';
import { ButtonToggle } from './ButtonToggle';
import HelloList from './HelloList';

class App extends Component {

  render() {
    /*
    let horloge;
    if (this.state.showHorloge) {
      horloge = <Horloge />;
    }
    */
    return (
      <div className="App">
        <Hello name="Romain" />
        <Hello name="Edouard" />
        <Horloge />
        <HorlogeDesactivable show={true} />
        <HelloList />
        <hr />
        Desactivable
        <HelloDesactivable name="Romain" show={false} />
      </div>
    );
  }
}

export default App;
