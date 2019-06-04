import React from 'react';
import { IContextProps, ITodosState, ITodo } from '../utils/interfaces';
import { normalizeTodos } from '../utils/generic';

const initialState: ITodosState = {
  todos: {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  }
};

export const Store = React.createContext({
  state: initialState
} as IContextProps);

function reducer(state, action) {
  switch (action.type) {
    case 'GET_TODOS':
      const norm = normalizeTodos(action.payload);
      return { ...state, todos: { ...norm } };
    case 'CREATE_TODO':
      return { ...state, byId: {} };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // put selectors here!
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
