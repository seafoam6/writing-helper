import axios from 'axios';
import { AxiosResponse } from 'axios';
import * as _i from '../utils/interfaces';

const todosUrl = 'http://localhost:3000/todos';

export const fetchTodos = () => {
  return axios
    .get(todosUrl)
    .then(
      (response: void | AxiosResponse<_i.DatabaseResponseRow[]>) => response
    )
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const createTodo = (description: string) => {
  return axios
    .post(todosUrl, { description })
    .then((response: void | AxiosResponse<_i.DatabaseResponseRow>) => response)
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const updateTodo = (todo: _i.ITodo) => {
  return axios
    .put(`${todosUrl}/${todo.id}`, todo)
    .then((response: void | AxiosResponse<_i.DatabaseResponseRow>) => response)
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const deleteTodo = (todo: _i.ITodo) => {
  return axios
    .delete(`${todosUrl}/${todo.id}`)
    .then((response: void | AxiosResponse<_i.CreateTodoResponse>) => response)
    .catch(error => {
      // handle error
      console.log(error);
    });
};
