import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TodoItem } from './TodoItem';

let cptTodoListRender = 0;

class TodoList extends PureComponent {

  /* fait automatiquement dans PureComponent
  shouldComponentUpdate(nextProps) {
    if (this.props.todos !== nextProps.todos) {
      return true;
    }

    return false;
  }
  */

  render() {
    const todos = this.props.todos;
    const list = todos.map((todo, i) => <TodoItem todo={todo} key={i} />);

    return (
      <div>{list}</div>
    );
  };
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
};

export { TodoList };
