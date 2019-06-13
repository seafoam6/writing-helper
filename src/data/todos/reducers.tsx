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
  console.log(action);
  return produce(state, draft => {
    const { todos } = draft;

    switch (action.type) {
      case actionTypes.TODOS_FETCH_SUCCEEDED:
        const norm = normalizeTodos(action.payload);
        return { ...state, todos: { ...norm } };
      case actionTypes.TODOS_CREATE_SUCCEEDED: {
        const { active, id } = action.payload;
        todos.ids.push(id);
        todos.byId[id] = action.payload;
        active ? todos.active.push(id) : todos.inactive.push(id);
        return draft;
      }
      case actionTypes.TODOS_UPDATE_SUCCEEDED: {
        const { active, id } = action.payload;
        todos.byId[id] = action.payload;
        todos.active = todos.active.filter(i => i !== id);
        todos.inactive = todos.inactive.filter(i => i !== id);

        active ? draft.todos.active.push(id) : draft.todos.inactive.push(id);
      }
      case actionTypes.TODOS_DELETE_SUCCEEDED: {
        const id = action.payload;
        console.log(id);
        delete todos.byId[id];
        todos.ids = todos.ids.filter(i => i !== id);
        todos.active = todos.active.filter(i => i !== id);
        todos.inactive = todos.inactive.filter(i => i !== id);
      }
    }
  });
};

export default todoReducer;
