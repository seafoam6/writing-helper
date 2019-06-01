import axios from 'axios';
import { AxiosResponse } from 'axios';

const todosUrl = 'http://localhost:3000/todos';

const fetchTodos = () => {
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

export { fetchTodos };
