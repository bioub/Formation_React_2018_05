import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({todo = ''}) => <div>{todo}</div>;

TodoItem.propTypes = {
  todo: PropTypes.string,
};

export { TodoItem };