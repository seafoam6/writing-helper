import React, { useCallback, useEffect } from 'react';
import { Box, Grid, Grommet, Heading, Button } from 'grommet';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { getRandomId } from '../data/todos/selectors';
import { actionCreators } from '../data/todos/actions';

const SideNav = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(state => ({
    id: getRandomId(state)
  }));

  const handleClick = () => {
    dispatch(actionCreators.todosFetch());
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
      <span>
        <Button fill={true} label="TEST" onClick={handleClick} />
      </span>
    </Box>
  );
};

export default SideNav;
