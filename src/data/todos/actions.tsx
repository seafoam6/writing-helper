import { fetchTodos } from '../api';

export const getTodosAction = async dispatch => {
  const data = await fetchTodos();

  return dispatch({
    type: 'GET_TODOS',
    payload: data ? data.data : []
  });
};

const getTodoByIdAction = (id: number) => {
  return {
    type: 'GET_TODO_BY_ID',
    id
  };
};

const createTodoAction = (description: string) => {
  return {
    type: 'CREATE_TODO'
  };
};

// TODO: break this into two seperate actions
// update queries
const updateTodoAction = (id: number, description: string, active: boolean) => {
  return {
    type: 'UPDATE_TODO',
    id,
    description,
    active
  };
};

const deleteTodoAction = (id: number) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export default {
  getTodoByIdAction,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction
};
