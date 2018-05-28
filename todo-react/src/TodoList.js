import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

const TodoList = ({todos = []}) => {
  const list = todos.map((todo, i) => <TodoItem todo={todo} key={i} />);

  return (
    <div>{list}</div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
};

export { TodoList };