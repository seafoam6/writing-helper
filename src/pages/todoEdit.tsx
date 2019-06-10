import React from 'react';
import { Button, Box, CheckBox } from 'grommet';
import { getTodoById } from '../data/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, match } from 'react-router';
import { Edit } from 'grommet-icons';
import { actionCreators } from '../data/todos/actions';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { todo } = useSelector(state => ({
    todo: getTodoById(state, match.params.id)
  }));

  const handleActiveChange = () => {
    dispatch(
      actionCreators.todoUpdate({
        ...todo,
        active: !todo.active
      })
    );
  };

  // make api call to mark a todo done

  return (
    <>
      {todo && (
        <Box direction="row">
          {todo && todo.active ? (
            <Button label="Not Completed" onClick={handleActiveChange} />
          ) : (
            <Button label="Completed" onClick={handleActiveChange} />
          )}
          {/* <CheckBox
            checked={!todo.active}
            onChange={event => console.log({...todo, active: !todo.active})
              // dispatch(
              //   actionCreators.todoUpdate(todo)
              // )
            }
            label={todo.description}
          /> */}
          <Button icon={<Edit />} />
        </Box>
      )}
    </>
  );
};

export default TodoEdit;
