import { ITodosState } from '../../utils/interfaces';

export const TodoSelectors = (state: ITodosState) => {
  const getTodos = state => state.todos;

  const getTodoIds = state => {
    return getTodos(state).ids;
  };

  const getAllTodos = () => {
    const todos = getTodos(state);
    const ids = getTodoIds(state);
    return ids.map(id => todos.byId[id]);
  };

  return {
    getTodoIds,
    getAllTodos
  };
};
