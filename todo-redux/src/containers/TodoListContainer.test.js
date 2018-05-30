import React from 'react';
import { shallow } from "enzyme";
import { TodoListContainer } from './TodoListContainer';
import { store } from '../store';
import { Provider } from 'react-redux';


test('TodoForm component should show name', () => {
  const wrapper = shallow(<Provider store={store}><TodoListContainer /></Provider>);
});
