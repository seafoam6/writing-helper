import React, { useCallback, useEffect } from 'react';
import { Box, Grid, Grommet, Heading, Button } from 'grommet';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useAsyncEffect } from 'use-async-effect';
import { getRandomId } from '../data/todos/selectors';

const SideNav = () => {
  const { id } = useSelector(state => ({
    id: getRandomId(state)
  }));

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
    </Box>
  );
};

export default SideNav;
