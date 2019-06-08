import React from 'react';
import { Button, Box } from 'grommet';
import { useSelector } from 'react-redux';
import { getAllActiveTodos } from '../data/todos/selectors';

const TodoList: React.FC = (props, context) => {
  const { allTodos } = useSelector(state => ({
    allTodos: getAllActiveTodos(state)
  }));

  return (
    <Box direction="row" gap="small" pad="small" wrap={true}>
      {allTodos.map((todo, idx) => {
        return (
          <Button
            margin="xsmall"
            label={`${todo.description} ${todo.id} `}
            key={idx}
            href={`/edit/${todo.id}`}
          />
        );
      })}
    </Box>
  );
};

export default TodoList;
