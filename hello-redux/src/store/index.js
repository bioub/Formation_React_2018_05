import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counters } from '../reducers';

export const store = createStore(
  combineReducers({counters}),
  composeWithDevTools(),
);
