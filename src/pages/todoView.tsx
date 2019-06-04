import React from 'react';
import { Button, Box } from 'grommet';
import { Store } from './../data/store';
import RandomPick from '../components/randomPick';

const TodoView: React.FC = (props, context) => {
  return (
    <Box pad="small" margin={{ bottom: 'auto' }}>
      <RandomPick />
    </Box>
  );
};

export default TodoView;
