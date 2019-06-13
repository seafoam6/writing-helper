import React, { useState, useEffect } from 'react';
import { Button, FormField, Select, TextInput, TextArea, Box } from 'grommet';
import styled from 'styled-components';
import { getTodoById } from '../data/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, match, Router } from 'react-router';
import { Edit } from 'grommet-icons';
import { actionCreators } from '../data/todos/actions';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik';
import TodoEditForm from '../components/todoEditForm';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  const [isEditMode, updateEditMode] = useState(false);
  const [isRedirect, setRedirect] = useState(false);

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

  const handleModeChange = () => {
    updateEditMode(!isEditMode);
  };

  const handleDelete = () => {
    dispatch(actionCreators.todoDelete(todo));
    setRedirect(true);
  };

  // make api call to mark a todo done

  return (
    <>
      {isRedirect && <Redirect to="/list" />}
      {todo && (
        <Box direction="row">
          {isEditMode ? (
            <TodoEditForm
              todo={todo}
              dispatch={dispatch}
              handleModeChange={handleModeChange}
              actionCreators={actionCreators}
              handleDelete={handleDelete}
            />
          ) : (
            <Box justify-content="space-around" direction="row">
              <h1>{todo.description}</h1>

              {todo.active ? (
                <Button label="Not Completed" onClick={handleActiveChange} />
              ) : (
                <Button label="Completed" onClick={handleActiveChange} />
              )}

              <Button onClick={handleModeChange} icon={<Edit />} />
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

/*


*/

export default TodoEdit;
