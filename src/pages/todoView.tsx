import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';
import { stuffToDo } from '../data/stuffToDo';
import { getRandomTodo } from '../utils/generic';
import { fetchTodos } from '../data/api';
import { AxiosResponse } from 'axios';
import { Todo } from '../utils/interfaces';
import { Store } from './../data/store.js';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const TodoView: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  return (
    <Wrapper>
      {state.todos.map(i => {
        return <Button label={i.description} />;
      })}

      {/* {buttonText !== defaultText && (
        <Button onClick={() => setButtonText(defaultText)} label="Reset" />
      )} */}
    </Wrapper>
  );
};

export default TodoView;
