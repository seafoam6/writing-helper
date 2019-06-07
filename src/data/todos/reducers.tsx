import React from 'react';
import { IContextProps, ITodosState, ITodo } from '../../utils/interfaces';
import { normalizeTodos } from '../../utils/generic';

const initialState: ITodosState = {
  todos: {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  }
};

export default function reducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case 'GET_TODOS':
      const norm = normalizeTodos(action.payload);
      console.log({ ...state, todos: { ...norm } });
      return { ...state, todos: { ...norm } };
    case 'CREATE_TODO':
      return { ...state, byId: {} };

    default:
      return state;
  }
}
