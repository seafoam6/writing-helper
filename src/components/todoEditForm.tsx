import React, { useState, useEffect } from 'react';

import { Button, FormField, Select, TextInput, TextArea, Box } from 'grommet';
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik';
import { Trash } from 'grommet-icons';

const TodoEditForm = ({
  todo,
  dispatch,
  handleModeChange,
  actionCreators,
  handleDelete
}) => {
  return (
    <Formik
      initialValues={{
        description: todo.description
      }}
      onSubmit={(values, actions) => {
        dispatch(
          actionCreators.todoUpdate({
            ...todo,
            description: values.description
          })
        );
        actions.setSubmitting(false);
        console.log(values, actions);
      }}
      render={({ values, errors, handleBlur, handleChange, isSubmitting }) => (
        <Form>
          <Box direction="row" justify-content="space-between">
            <TextInput
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />

            <Button type="submit" disabled={isSubmitting} label="Submit" />
            <Button
              type="submit"
              disabled={isSubmitting}
              label="Cancel"
              onClick={handleModeChange}
            />
            <Button onClick={handleDelete} icon={<Trash />} />
          </Box>
        </Form>
      )}
    />
  );
};

export default TodoEditForm;
