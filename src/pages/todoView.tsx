import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';
import { Store } from './../data/store';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const TodoView: React.FC = (props, context) => {
  const { state } = React.useContext(Store);

  return (
    <Wrapper>
      {state.todos.map((i, idx) => {
        return <Button label={i.description} key="idx" />;
      })}
    </Wrapper>
  );
};

export default TodoView;
