import React from 'react';
import { IContextProps } from '../utils/interfaces';

export const Store = React.createContext({} as IContextProps);

const initialState = {
  todos: [],
  currentText: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state, todos: action.payload };
    // case "CREATE_TODO":

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
