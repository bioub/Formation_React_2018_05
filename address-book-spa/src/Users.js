import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { UsersList } from './UsersList';
import { UsersAdd } from './UsersAdd';
import { UsersShow } from './UsersShow';
import { Switch, Route, Link } from 'react-router-dom';

const styles = StyleSheet.create({
  container: {
      display: 'flex'
  },
});

class Users extends Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <div className={css(styles.container)}>
          <div>
            <UsersList />
            <Link to="/users/add">Ajouter</Link>
          </div>
          <div>
            <Switch>
              <Route path={this.props.match.path + '/add'} component={UsersAdd} />
              <Route path="/users/:id" component={UsersShow} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Users,
};