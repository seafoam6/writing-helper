import React from 'react';
import { Button, Box, CheckBox } from 'grommet';
import { getTodoById } from '../data/todos/selectors';
import { useSelector } from 'react-redux';
import { Redirect, match } from 'react-router';
import { Edit } from 'grommet-icons';

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
        <Box direction="row">
          <CheckBox
            checked={todo.active}
            onChange={event => {}}
            label={todo.description}
          />
          <Button icon={<Edit />} />
        </Box>
      )}
    </>
  );
};

export default TodoEdit;
