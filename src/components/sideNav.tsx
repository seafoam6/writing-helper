import React, { useCallback, useEffect } from 'react';
import { Box, Grid, Grommet, Heading, Button } from 'grommet';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as _s from '../data/todos/selectors';
import { actionCreators } from '../data/todos/actions';

const SideNav = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(state => ({
    id: _s.getRandomId(state)
  }));
  const { testTodo } = useSelector(state => ({
    testTodo: _s.getTestId(state)
  }));

  const handleClick = () => {
    dispatch(actionCreators.todoCreate('Dumb thing'));
  };

  const handleClick2 = () => {
    dispatch(actionCreators.todoDelete(testTodo));
  };

  return (
    <Box
      gridArea="nav"
      background="light-5"
      direction="column"
      gap="small"
      pad="small"
    >
      <Heading>Todos</Heading>

      <Link to={`/edit/${id}`}>
        <Button fill={true} label="Get random todo" disabled={!id} />
      </Link>
      <Link to="/add/">
        <Button fill={true} label="Todo add" />
      </Link>
      <Link to="/list/">
        <Button fill={true} label="Todo View All" />
      </Link>
      {/* <span>
        <Button fill={true} label="Add crap" onClick={handleClick} />
      </span>
      <span>
        <Button fill={true} label="removeCrap" onClick={handleClick2} />
      </span> */}
    </Box>
  );
};

export default SideNav;
