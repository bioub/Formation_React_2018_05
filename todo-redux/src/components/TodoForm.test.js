import React from 'react';
import { shallow } from "enzyme";
import { TodoForm } from './TodoForm';


test('TodoForm component should show name', () => {
  const handleChange = jest.fn();
  const wrapper = shallow(<TodoForm handleChange={handleChange} />);

  wrapper.find('input[type="text"]').simulate('change');

  expect(handleChange).toHaveBeenCalledTimes(1);
});
