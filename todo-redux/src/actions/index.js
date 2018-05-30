import { TODO_ADD, TODO_CHANGE_INPUT } from '../constants';

// action Creator
export const todoAdd = (todo) => ({
  type: TODO_ADD,
  todo,
});

export const todoChangeInput = (todo) => ({
  type: TODO_CHANGE_INPUT,
  todo,
});

// dispatch(todoChangeInput('Sera affichée dans le champs'))
