import { TODO_ADD, TODO_CHANGE_INPUT } from '../constants';


export const todos = (state = [], {type, todo}) => {
  switch (type) {
    case TODO_ADD:
      return [...state, todo];
  }
  return state;
};

export const newTodo = (state = '', {type, todo}) => {
  switch (type) {
    case TODO_CHANGE_INPUT:
      return todo;
  }
  return state;
};

