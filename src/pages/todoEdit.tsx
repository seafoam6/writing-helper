import React from 'react';
import { Button, Box } from 'grommet';
import { getTodoById } from '../data/todos/selectors';
import { useSelector } from 'react-redux';
import { Redirect, match } from 'react-router';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  const { todo } = useSelector(state => ({
    todo: getTodoById(state, match.params.id)
  }));

  // make api call to mark a todo done

  return (
    <>
      {todo && (
        <>
          <p>{todo.description}</p>
          <Button label={todo.active ? 'complete' : 'undo'} />
        </>
      )}
    </>
  );
};

export default TodoEdit;
