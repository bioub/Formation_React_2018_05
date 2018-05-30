import React, { Component } from 'react';
import { TodoListContainer } from '../containers/TodoListContainer';
import { TodoFormContainer } from '../containers/TodoFormContainer';
import { TodoForm } from './TodoForm';

const App = () => (
  <div className="App">
    <TodoFormContainer />
    <TodoListContainer />
  </div>
);

export default App;
