import React, { Component } from 'react';
import { Hello } from './Hello';

class HelloList extends Component {

  state = {
    prenoms: ['Jean', 'Eric'],
  };

  render() {
    const listHellos = this.state.prenoms.map((prenom, i) => <Hello name={prenom} key={i} />);

    return (
      <div>
        {listHellos}
      </div>
    );
  }
}

export default HelloList;