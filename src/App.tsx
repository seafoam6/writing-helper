import React, { useCallback, useEffect } from 'react';
import { Box, Grid, Grommet, Heading, Button } from 'grommet';
import styled from 'styled-components';
import TodoEdit from './pages/todoEdit';
import TodoSingleView from './pages/todoSingleView';
import TodoList from './pages/todoList';
import TodoAdd from './pages/todoAdd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getTodosAction } from './data/todos/actions';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './data/api';
import { useAsyncEffect } from 'use-async-effect';
import SideNav from './components/sideNav';

const Wrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 12px;
`;

const CoolHeading = styled(Heading)`
  padding-left: 1em;
  margin-top: auto;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useAsyncEffect(async () => {
    const todos = await fetchTodos();

    dispatch(getTodosAction(todos));
  });

  return (
    <Router>
      <Grommet full={true}>
        <Grid
          rows={['30%', '70%']}
          columns={['20%']}
          gap="small"
          alignContent="stretch"
          fill="vertical"
          style={{ height: '100vh' }}
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box gridArea="header" background="brand" pad="medium">
            <CoolHeading>Writing Helper</CoolHeading>
          </Box>
          <SideNav />
          <Box gridArea="main" background="light-2" overflow="scroll">
            <Wrapper>
              <Route path="/list/" component={TodoList} />
              <Route path="/edit/:id" component={TodoEdit} />
              <Route path="/todo/:id" component={TodoSingleView} />
              <Route path="/add/" component={TodoAdd} />
            </Wrapper>
          </Box>
        </Grid>
      </Grommet>
    </Router>
  );
};

export default App;
