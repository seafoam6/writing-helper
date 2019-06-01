import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';
import { stuffToDo } from '../data/stuffToDo';
import { getRandomTodo } from '../utils/generic';
import { fetchTodos } from '../utils/api';
import { AxiosResponse } from 'axios';
import { Todo } from '../utils/interfaces';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const useEndpoint = () => {
  const [res, setRes] = useState({
    todos: [],
    complete: false,
    pending: false,
    error: false
  });

  useEffect(() => {
    setRes({
      todos: [],
      pending: true,
      error: false,
      complete: false
    });
    fetchTodos()
      .then(res =>
        setRes({
          todos: res ? res.data : [],
          pending: false,
          error: false,
          complete: true
        })
      )
      .catch(() =>
        setRes({
          todos: [],
          pending: false,
          error: true,
          complete: true
        })
      );
  }, []);

  let random = '';

  if (res.todos.length > 0) {
    const thing = getRandomTodo(res.todos);
    if (thing.hasOwnProperty('description')) {
      random = thing.description;
    }
  }

  return { res, random };
};

const TodoView: React.FC = () => {
  const defaultText = 'Loading';

  const todoRes = useEndpoint();

  return (
    <Wrapper>
      <Button label={todoRes.random} />
      {/* {buttonText !== defaultText && (
        <Button onClick={() => setButtonText(defaultText)} label="Reset" />
      )} */}
    </Wrapper>
  );
};

export default TodoView;
