import React, { useState } from 'react';
import { Button, FormField, Select, TextInput, TextArea, Box } from 'grommet';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import styled from 'styled-components';

const TodoAdd: React.FC = () => {
  const [submitted, setSubmitting] = useState(false);
  return (
    <Formik
      initialValues={{
        description: ''
      }}
      validate={values => {
        const errors = {
          description: ''
        };
        if (!values.description) {
          errors.description = 'required';
        }

        return errors;
      }}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      onSubmit={(values, { setSubmitting }) => {
        // whatever submitting the form should entail
        alert('Submitting\n' + JSON.stringify(values, null, 2));
        setSubmitting(true);
      }}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
        <form
          onSubmit={event => {
            event.preventDefault();
            setSubmitting(true);
            handleSubmit();
          }}
        >
          <FormField label="Description" error={errors.description}>
            <TextInput
              name="description"
              value={values.description || ''}
              onChange={handleChange}
            />
          </FormField>

          <Box
            tag="footer"
            margin={{ top: 'medium' }}
            direction="row"
            justify="between"
          >
            <Button label="Cancel" />
            <Button type="submit" primary label="Create" />
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default TodoAdd;
