import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setOfThings, stuffToDo } from './data/stuffToDo';
import { arrOfNumbers, getRandomThing } from './utils/generic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
