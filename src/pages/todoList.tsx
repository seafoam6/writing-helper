import React from 'react';
import { Button, Box } from 'grommet';
import { Store } from './../data/store';

const TodoView: React.FC = (props, context) => {
  const { state } = React.useContext(Store);

  return (
    <Box direction="row" gap="small" pad="small" wrap={true}>
      {state.todos.map((todo, idx) => {
        return <Button margin="xsmall" label={todo.description} key={idx} />;
      })}
    </Box>
  );
};

export default TodoView;
