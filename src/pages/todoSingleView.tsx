import React, { useState, useEffect } from 'react';
import { Button, Box, Grid, Grommet, Heading } from 'grommet';
import { ITodo } from '../utils/interfaces';
import { Link } from 'react-router-dom';

interface IProps {
  match: any;
}

const TodoSingleView: React.FC<IProps> = ({ match }) => {
  // const { state } = React.useContext(Store);
  // const {getTodoById } = TodoSelectors(state);

  //   useEffect(() => {

  //     console.log(match.params.id)
  //     const todo = getTodoById(match.params.id)
  //     console.log(todo)
  //   }, [])

  return (
    <Box>
      <Box>{/* {todo.description} */}</Box>
    </Box>
  );
};

export default TodoSingleView;
