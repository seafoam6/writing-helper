import React from 'react';
import { IContextProps, ITodosState, ITodo } from '../utils/interfaces';
import { normalizeTodos } from '../utils/generic';
import { createStore } from 'redux';

const initialState: ITodosState = {
  todos: {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  }
};

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

export const store = createStore(reducer);
