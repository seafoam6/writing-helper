import { fetchTodos, fetchCreateTodo } from '../api';
import { getResultFromAPICall } from '../../utils/generic';

export const getTodosAction = async dispatch => {
  const data = await fetchTodos();

  return dispatch({
    type: 'GET_TODOS',
    payload: data ? data.data : []
  });
};

export const getTodoByIdAction = (id: number) => {
  return {
    type: 'GET_TODO_BY_ID',
    id
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
    // console.log(thing);

    // return Object.assign(
    //   {},
    //   { type: "CREATE_TODO" },
    //   getResultFromAPICall(response)
    // );
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
