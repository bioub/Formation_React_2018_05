import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({handleSubmit, handleChange, newTodo}) => (
  <form onSubmit={(event) => handleSubmit(event, newTodo)}>
    <label>
      Todo:
      <input type="text" value={newTodo} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
);

TodoForm.propTypes = {
  newTodo: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export { TodoForm };
