import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const TodoListContainer = connect(mapStateToProps)(TodoList);

export { TodoListContainer };
