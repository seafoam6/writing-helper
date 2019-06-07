import { fetchTodos, fetchCreateTodo, fetchGetTodoById } from '../api';
import { getResultFromAPICall } from '../../utils/generic';

export const getTodosAction = data => {
  console.log(data);
  return {
    type: 'GET_TODOS',
    payload: data ? data.data : []
  };
};

export const createTodoAction = async (description: string) => {
  const response = await fetchCreateTodo(description);
  if (response) {
    const payload = getResultFromAPICall(response);
    return {
      payload,
      type: 'CREATE_TODO'
    };
  } else {
    throw new Error('create todo action failed');
  }
};

// TODO: break this into two seperate actions
// update queries
export const updateTodoAction = (
  id: number,
  description: string,
  active: boolean
) => {
  return {
    type: 'UPDATE_TODO',
    id,
    description,
    active
  };
};

export const deleteTodoAction = (id: number) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};
