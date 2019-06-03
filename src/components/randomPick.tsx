import React, { useState } from 'react';
import { Button, Box, Grid, Grommet, Heading } from 'grommet';
import { ITodo } from '../utils/interfaces';
import { Link } from 'react-router-dom';

const RandomPick: React.FC<{ todos: ITodo[] }> = ({ todos }) => {
  const [pickedTodo, setTodo] = useState({ description: '' } as ITodo);

  const pickRandomTodo = () => {
    const pick = todos[Math.floor(Math.random() * todos.length)];
    setTodo(pick);
  };

  return (
    <Box>
      <Button label="Pick Random Task" onClick={pickRandomTodo} />
      <Box>
        <Link to={`/`}>{pickedTodo.description}</Link>
      </Box>
    </Box>
  );
};

export default RandomPick;
