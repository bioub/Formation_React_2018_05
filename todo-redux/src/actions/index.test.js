/* global it, expect */
import { todoAdd } from '.';

it('todoAdd action creator', () => {
  const action = todoAdd('Acheter du pain');

  expect(action.type).toBe('TODO_ADD');
  expect(action.todo).toBe('Acheter du pain');
});
