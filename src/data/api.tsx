import axios from 'axios';
import { AxiosResponse } from 'axios';

const todosUrl = 'http://localhost:3000/todos';

export const fetchTodos = () => {
  return axios
    .get(todosUrl)
    .then((response: void | AxiosResponse) => {
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const fetchGetTodoById = id => {
  return axios
    .get(todosUrl)
    .then((response: void | AxiosResponse) => {
      console.log('xx', response);
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};

export const fetchCreateTodo = (description: string) => {
  return axios
    .post(todosUrl, { description })
    .then((response: void | AxiosResponse) => {
      return response;
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
};
