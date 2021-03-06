import React from 'react';
import { Button, Box } from 'grommet';
import { useSelector } from 'react-redux';
import { getAllActiveTodos } from '../data/todos/selectors';
import { shuffle } from 'lodash';

const TodoList: React.FC = (props, context) => {
  const { allTodos } = useSelector(state => ({
    allTodos: getAllActiveTodos(state)
  }));

  return (
    <Box direction="row" gap="small" pad="small" wrap={true}>
      {shuffle(allTodos).map((todo, idx) => {
        return (
          <Button
            margin="xsmall"
            label={`${todo.description}`}
            key={idx}
            href={`/edit/${todo.id}`}
          />
        );
      })}
    </Box>
  );
};

export default TodoList;
