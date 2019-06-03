import React from 'react';
import { Box, Grid, Grommet, Heading } from 'grommet';
import styled from 'styled-components';
import TodoView from './pages/todoView';
import TodoEdit from './pages/todoEdit';
import TodoList from './pages/todoList';
import TodoAdd from './pages/todoAdd';
import { Store } from './data/store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getTodosAction } from './data/todos/actions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const CoolHeading = styled(Heading)`
  padding-left: 1em;
  margin-top: auto;
`;

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.todos.length === 0 && getTodosAction(dispatch);
  }, [state]);

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
          <Box gridArea="nav" background="light-5">
            <nav>
              <ul>
                <li>
                  <Link to="/">Todo View</Link>
                </li>
                <li>
                  <Link to="/edit/">Todo Edit</Link>
                </li>
                <li>
                  <Link to="/add/">Todo add</Link>
                </li>
                <li>
                  <Link to="/list/">Todo View All</Link>
                </li>
              </ul>
            </nav>
          </Box>
          <Box
            gridArea="main"
            background="light-2"
            overflow="scroll"
            pad="small"
          >
            <Wrapper>
              <Route path="/" exact component={TodoView} />
              <Route path="/list/" component={TodoList} />
              <Route path="/edit/" component={TodoEdit} />
              <Route path="/add/" component={TodoAdd} />
            </Wrapper>
          </Box>
        </Grid>
      </Grommet>
    </Router>
  );
};

export default App;
