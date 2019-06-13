import * as INTERFACE from '../../utils/interfaces';

export const TODOS_FETCH_REQUESTED = 'TODOS_FETCH_REQUESTED';
export const TODOS_FETCH_SUCCEEDED = 'TODOS_FETCH_SUCCEEDED';
export const TODOS_FETCH_FAILED = 'TODOS_FETCH_FAILED';

export const TODOS_CREATE_REQUESTED = 'TODOS_CREATE_REQUESTED';
export const TODOS_CREATE_SUCCEEDED = 'TODOS_CREATE_SUCCEEDED';
export const TODOS_CREATE_FAILED = 'TODOS_CREATE_FAILED';

export const TODOS_UPDATE_REQUESTED = 'TODOS_UPDATE_REQUESTED';
export const TODOS_UPDATE_SUCCEEDED = 'TODOS_UPDATE_SUCCEEDED';
export const TODOS_UPDATE_FAILED = 'TODOS_UPDATE_FAILED';

export const TODOS_DELETE_REQUESTED = 'TODOS_DELETE_REQUESTED';
export const TODOS_DELETE_SUCCEEDED = 'TODOS_DELETE_SUCCEEDED';
export const TODOS_DELETE_FAILED = 'TODOS_DELETE_FAILED';

export const actionTypes = {
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED,
  TODOS_FETCH_FAILED,

  TODOS_CREATE_REQUESTED,
  TODOS_CREATE_SUCCEEDED,
  TODOS_CREATE_FAILED,

  TODOS_UPDATE_REQUESTED,
  TODOS_UPDATE_SUCCEEDED,
  TODOS_UPDATE_FAILED,

  TODOS_DELETE_REQUESTED,
  TODOS_DELETE_SUCCEEDED,
  TODOS_DELETE_FAILED
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
const todosFail = (message: string) => {
  return {
    type: TODOS_FETCH_FAILED,
    payload: message
  };
};

export const todoCreate = (description: string) => {
  return {
    description,
    type: TODOS_CREATE_REQUESTED
  };
};
export const todoCreateSuccess = data => {
  return {
    type: TODOS_CREATE_SUCCEEDED,
    payload: data
  };
};
export const todoCreateFail = (message: string) => {
  return {
    type: TODOS_CREATE_FAILED,
    payload: message
  };
};

export const todoUpdate = (todo: INTERFACE.ITodo) => {
  return {
    type: TODOS_UPDATE_REQUESTED,
    payload: todo
  };
};
export const todoUpdateSuccess = data => {
  return {
    type: TODOS_UPDATE_SUCCEEDED,
    payload: data
  };
};
export const todoUpdateFail = (message: string) => {
  return {
    type: TODOS_UPDATE_FAILED,
    payload: message
  };
};

export const todoDelete = (todo: INTERFACE.ITodo) => {
  return {
    type: TODOS_DELETE_REQUESTED,
    payload: todo
  };
};
export const todoDeleteSuccess = data => {
  return {
    type: TODOS_DELETE_SUCCEEDED,
    payload: data
  };
};
export const todoDeleteFail = (message: string) => {
  return {
    type: TODOS_DELETE_FAILED,
    payload: message
  };
};

export const actionCreators = {
  todosSuccess,
  todosFetch,
  todosFail,

  todoCreate,
  todoCreateSuccess,
  todoCreateFail,

  todoUpdate,
  todoUpdateSuccess,
  todoUpdateFail,

  todoDelete,
  todoDeleteSuccess,
  todoDeleteFail
};
