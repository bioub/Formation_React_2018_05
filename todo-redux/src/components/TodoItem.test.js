import React from 'react';
import { shallow } from "enzyme";
import { TodoItem } from './TodoItem';

/*
beforeEach(() => {
  console.log('Coucou')
});
*/

test('TodoItem component should mount', () => {
  shallow(<TodoItem />);
});

test('TodoItem component should show name', () => {
  const wrapper = shallow(<TodoItem todo="Acheter du pain" />);
  expect(wrapper.find('div').contains('Acheter du pain')).toBeTruthy();
});
