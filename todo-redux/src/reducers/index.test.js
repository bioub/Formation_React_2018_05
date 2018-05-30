import { todos } from ".";

test('todos reducer return initially an array', () => {
  const nextState = todos(undefined, {type:'@@INIT'});
  expect(Array.isArray(nextState)).toBeTruthy();
});

test('todos reducer', () => {
  const previousState = ['Item 1', 'Item 2'];

  const nextState = todos(previousState, {type:'TODO_ADD', todo: 'Item 3'});

  expect(nextState).not.toBe(previousState); // references
  expect(nextState[2]).toBe('Item 3');
});
