import React, { Component } from 'react';
import axios from 'axios';

const CancelToken = axios.CancelToken;

class UsersShow extends Component {

  _source = CancelToken.source();

  state = {
    user: {}
  };

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if (this.state.user !== nextState.user) {
      return true;
    }

    if (nextProps.match.params.id === this.props.match.params.id) {
      return false;
    }

    return true;
  }

  componentWillUpdate() {
    this.fetchUser();
  }

  componentWillUnmount() {
    // todo 
    // this._source.cancel();
  }

  fetchUser() {
    const id = this.props.match.params.id;
    axios.get("https://jsonplaceholder.typicode.com/users/" + id, {
      cancelToken: this._source.token
    }).then(response => {
      this.setState({
        user: response.data
      });
    });
  }


  render() {
    return (
      <div>
        <h2>Users Show</h2>
        <p>Name: {this.state.user.name}</p>
        <p>Email: {this.state.user.email}</p>
      </div>
    );
  }
}

export {
  UsersShow,
};