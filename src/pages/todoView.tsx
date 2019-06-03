import React from 'react';
import { Button, Box } from 'grommet';
import { Store } from './../data/store';
import RandomPick from '../components/randomPick';

const TodoView: React.FC = (props, context) => {
  const { state } = React.useContext(Store);

  return (
    <Box pad="small" margin={{ bottom: 'auto' }}>
      <RandomPick todos={state.todos} />
    </Box>
  );
};

export default TodoView;
