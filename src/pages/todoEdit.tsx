import React, { useState } from 'react';
import { Button, Box, CheckBox } from 'grommet';
import { getTodoById } from '../data/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, match } from 'react-router';
import { Edit } from 'grommet-icons';
import { actionCreators } from '../data/todos/actions';
import { Formik } from 'formik';

interface IProps {
  match: any;
}

// change data structure to byId
// write selectors

const TodoEdit: React.SFC<IProps> = ({ match }) => {
  const [isEditMode, updateEditMode] = useState(false);
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

  // make api call to mark a todo done

  return (
    <>
      {todo && (
        <Box>
          {isEditMode ? (
            <Formik
              initialValues={{
                description: todo.description
              }}
              onSubmit={(values, actions) => {
                // todo: action here
                console.log(values, actions);
              }}
              render={({
                values,
                errors,
                status,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />

                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            />
          ) : (
            <>
              <h1>{todo.description}</h1>
              <Box>
                <Button onClick={handleModeChange} icon={<Edit />} />
              </Box>
            </>
          )}
          <Box direction="row">
            {todo.active ? (
              <Button label="Not Completed" onClick={handleActiveChange} />
            ) : (
              <Button label="Completed" onClick={handleActiveChange} />
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

/*


*/

export default TodoEdit;
