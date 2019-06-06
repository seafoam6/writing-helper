import React from 'react';
import { Button, Box } from 'grommet';

const TodoView: React.FC = (props, context) => {
  // const { state, dispatch } = React.useContext(Store);
  // const { getAllTodos } = TodoSelectors(state);
  // const allTodos = getAllTodos();

  return (
    <Box direction="row" gap="small" pad="small" wrap={true}>
      {/* {allTodos.map((todo, idx) => {
        return (
          <Button
            margin="xsmall"
            label={`${todo.description} ${todo.id} `}
            key={idx}
            href={`/edit/${todo.id}`}
          />
        );
      })} */}
    </Box>
  );
};

export default TodoView;
