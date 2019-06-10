import axios from 'axios';
import { AxiosResponse } from 'axios';
import * as INTERFACE from '../utils/interfaces';

const todosUrl = 'http://localhost:3000/todos';

export const fetchTodos = () => {
  return axios
    .get(todosUrl)
    .then((response: void | AxiosResponse<any>) => {
      console.log('xxx', response);
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const createTodo = (description: string) => {
  return axios
    .post(todosUrl, { description })
    .then((response: void | AxiosResponse<INTERFACE.CreateTodoResponse>) => {
      console.log('createTodo response', response);
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const updateTodo = (todo: INTERFACE.ITodo) => {
  console.log('in update API call FE', todo);
  return axios
    .put(`${todosUrl}/${todo.id}`, todo)
    .then((response: void | AxiosResponse<INTERFACE.CreateTodoResponse>) => {
      console.log('update response', response);
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
