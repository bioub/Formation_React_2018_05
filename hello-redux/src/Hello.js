import React from 'react';
import PropTypes from 'prop-types'
import { desactivable } from './desactivable';

// Composant Stateless (juste une fonction)
// const Hello = (props) => 'Hello ' + props.name;
// const Hello = ({name}) => `Hello ${name}`; // ES6 destructuring object
const Hello = ({name = 'John'}) => <p>Hello <b>{name}</b></p>

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

const HelloDesactivable = desactivable(Hello);

export {
  Hello,
  HelloDesactivable,
};
