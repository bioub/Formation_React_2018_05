import { connect } from 'react-redux';
import { TodoForm } from '../components/TodoForm';
import { todoAdd, todoChangeInput } from '../actions';

const mapStateToProps = (state) => ({
  newTodo: state.newTodo,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (event, newTodo) => {
    event.preventDefault();
    dispatch(todoAdd(newTodo));
  },
  handleChange: (event) => {
    dispatch(todoChangeInput(event.target.value));
  },
});
/*
handleSubmit = (event) => {
    event.preventDefault();
    // this.props.onAdd(this.state.value);
    this.props.dispatch(todoAdd(this.props.newTodo));
  };

  handleChange = (event) => {
    // this.setState({value: event.target.value});
    this.props.dispatch(todoChangeInput(event.target.value));
  };
  */

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export { TodoFormContainer };
