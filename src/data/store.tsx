import React from 'react';
import { IContextProps, IState } from '../utils/interfaces';

const initialState: IState = {
  todos: [],
  currentText: ''
};

export const Store = React.createContext({
  state: initialState
} as IContextProps);

function reducer(state, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state, todos: action.payload };
    case 'CREATE_TODO':
      const temp = { ...state, todos: [...state.todos, action.payload] };
      console.log(temp);
      return temp;

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
