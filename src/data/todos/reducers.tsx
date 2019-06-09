import React from 'react';
import { IContextProps, ITodosState, ITodo } from '../../utils/interfaces';
import { normalizeTodos } from '../../utils/generic';
import produce from 'immer';
import * as action from './actions';

const initialState: ITodosState = {
  todos: {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  }
};

const todoReducer = (state = initialState, action) => {
  console.log(action, state);
  return produce(state, draft => {
    switch (action.type) {
      case action.TODOS_FETCH_REQUESTED:
        const norm = normalizeTodos(action.payload);
        console.log({ ...state, todos: { ...norm } });
        return { ...state, todos: { ...norm } };
      case 'CREATE_TODO':
        return { ...state, byId: {} };
    }
  });
};

export default todoReducer;
