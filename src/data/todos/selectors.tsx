import { ITodosState } from '../../utils/interfaces';
import { createSelector } from 'reselect';

export const getTodos = (state: ITodosState) => state.todos;

export const getTodoIds = (state: ITodosState) => state.todos.ids;

export const getActiveTodoIds = (state: ITodosState) => state.todos.active;

export const getTodoById = (state: ITodosState, id: string) =>
  state.todos.byId[id];

export const getAllTodos = createSelector(
  getTodos,
  getTodoIds,
  (todos, ids) => {
    return ids.map(id => todos.byId[id]);
  }
);

export const getAllActiveTodos = createSelector(
  getTodos,
  getActiveTodoIds,
  (todos, ids) => {
    return ids.map(id => todos.byId[id]);
  }
);

export const getRandomId = createSelector(
  getActiveTodoIds,
  ids => ids[Math.floor(Math.random() * ids.length)]
);

export const getTestId = createSelector(
  getAllActiveTodos,
  todos => todos.filter(todo => todo.description === 'Dumb thing')[0]
);
