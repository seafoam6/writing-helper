import { ITodosState } from '../../utils/interfaces';
import { createSelector } from 'reselect';

export const getTodos = (state: ITodosState) => state.todos;

export const getTodoIds = (state: ITodosState) => state.todos.ids;

export const getAllTodos = createSelector(
  getTodos,
  getTodoIds,
  (todos, ids) => {
    return ids.map(id => todos.byId[id]);
  }
);

export const getTodoById = (state: ITodosState, id: string) =>
  state.todos.byId[id];
