import React, { Component } from 'react';
import { TodoList } from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {

  state = {
    todos: ['Item 1', 'Item 2'],
  };

  addTodo = (todo) => {
    // this.state.todos.push(todo); // changement muable (pas d'appel à render)
    const todos = [...this.state.todos, todo]; // changement immuable (pas d'appel à render)

    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <div className="App">
        <TodoForm onAdd={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
