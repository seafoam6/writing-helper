import React from 'react';
import { IContextProps, ITodosState, ITodo } from '../../utils/interfaces';
import { normalizeTodos } from '../../utils/generic';
import produce from 'immer';
import { actionTypes } from './actions';

const initialState: ITodosState = {
  todos: {
    ids: [] as number[],
    byId: {},
    active: [] as number[],
    inactive: [] as number[]
  }
};

const todoReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.TODOS_FETCH_SUCCEEDED:
        const norm = normalizeTodos(action.payload);
        return { ...state, todos: { ...norm } };
      case actionTypes.TODOS_CREATE_SUCCEEDED:
        const { active, id } = action.payload;
        draft.todos.ids.push(id);
        draft.todos.byId[id] = action.payload;
        active ? draft.todos.active.push(id) : draft.todos.inactive.push(id);
        return draft;
    }
  });
};

export default todoReducer;
