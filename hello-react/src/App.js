import React, { Component } from 'react';
import './App.css';
import { Hello, HelloDesactivable } from './Hello';
import { Horloge } from './Horloge';
import { ButtonToggle } from './ButtonToggle';
import HelloList from './HelloList';

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
        <Hello name="Romain" />
        <Hello name="Edouard" />
        <Horloge />
        {this.state.showHorloge && <Horloge />}
        <ButtonToggle onToggle={this.toggleButton} />
        <HelloList />
        <hr />
        Desactivable
        <HelloDesactivable name="Romain" />
      </div>
    );
  }
}

export default App;
