import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, newTodo } from '../reducers';

/*
{
  newTodo: 'Acheter du ';
  todos: [
    'Faire les courses',
    'Acheter du pain',
  ];
}
*/

// 1 - Dispatch une action et mettre la valeur de newTodo dans le store
// 2 - Connecter TodoForm à redux pour :
// - dispatcher l'action associée à newTodo à chaque changement du champs
// - dispatcher l'action TODO_ADD au submit du form



export const store = createStore(
  combineReducers({newTodo, todos}),
  composeWithDevTools(),

);
