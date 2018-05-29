import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  state = {
    value: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.value);
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Todo:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TodoForm;
