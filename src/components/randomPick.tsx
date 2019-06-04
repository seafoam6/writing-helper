import React, { useState } from 'react';
import { Button, Box, Grid, Grommet, Heading } from 'grommet';
import { ITodo } from '../utils/interfaces';
import { Link } from 'react-router-dom';
import { Store } from '../data/store';
import { TodoSelectors } from '../data/todos/selectors';

const RandomPick: React.FC<{}> = () => {
  const [pickedTodo, setTodo] = useState({ description: '' } as ITodo);
  const { state } = React.useContext(Store);
  const { getAllTodos } = TodoSelectors(state);

  const pickRandomTodo = () => {
    const allTodos = getAllTodos();

    const rando = allTodos[Math.floor(Math.random() * allTodos.length)];
    setTodo(rando);
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
