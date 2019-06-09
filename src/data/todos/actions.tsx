import { fetchTodos, fetchCreateTodo, fetchGetTodoById } from '../api';
import { getResultFromAPICall } from '../../utils/generic';

export const TODOS_FETCH_REQUESTED = 'TODOS_FETCH_REQUESTED';
export const TODOS_FETCH_SUCCEEDED = 'TODOS_FETCH_SUCCEEDED';
export const TODOS_FETCH_FAILED = 'TODOS_FETCH_FAILED';

export const actionTypes = {
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED
};

const todosFetch = () => {
  return {
    type: TODOS_FETCH_REQUESTED
  };
};

const todosSuccess = data => {
  return {
    type: TODOS_FETCH_SUCCEEDED,
    payload: data
  };
};

const todosFail = message => {
  return {
    type: TODOS_FETCH_FAILED,
    payload: message
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

export const ToggleTodoAction = (id: number) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const deleteTodoAction = (id: number) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const actionCreators = {
  todosSuccess,
  todosFetch,
  todosFail
};
