import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UsersList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    const links = this.state.users.map(user => (
      <li key={user.id}>
        <Link to={"/users/" + user.id}>{user.name}</Link>
      </li>
    ));

    return (
      <div>
        <h2>Users List</h2>
        <ul>{links}</ul>
      </div>
    );
  }
}

export { UsersList };
