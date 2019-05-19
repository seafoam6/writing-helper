import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setOfThings, stuffToDo } from './data/stuffToDo'
import {arrOfNumbers, getRandomThing} from './utils/generic'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('arrOfNumbers', () => {
  it('returns an array of numbers', () => {
    expect(arrOfNumbers(4)).toEqual([1,2,3,4])
  })
})

describe('setOfThings', () => {
  it('returns an array of things', () => {
    expect(setOfThings(4, "DA DA DA")).toMatchSnapshot()
  })
})

describe('stuffToDo', () => {
  it('returns an array of things', () => {
    expect(stuffToDo).toMatchSnapshot()
  })
})

describe('getRandomThing', () => {
  it('returns an array of things', () => {
    const list = ['a', 'b', 'c']
    const thing = getRandomThing(list);
    expect(list.indexOf(thing)).not.toEqual(-1)
  })
})