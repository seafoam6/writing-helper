import * as React from 'react';
// import React, { useState } from "react";
import { Button, FormField, Select, TextInput, TextArea, Box } from 'grommet';
import { Store } from './../data/store';

import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik';

interface MyFormValues {
  description: string;
}

const TodoAdd: React.SFC<{}> = () => {
  const { state } = React.useContext(Store);
  return (
    <div>
      <Formik
        initialValues={{ description: '' }}
        onSubmit={(
          values: MyFormValues,
          actions: FormikActions<MyFormValues>
        ) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<MyFormValues>) => (
          <Form>
            <Field
              name="description"
              render={({ field, form }: FieldProps<MyFormValues>) => (
                <div>
                  {/* todo: add error as a prop to form field
                  error={errors.description}
                   */}
                  <FormField>
                    <TextInput
                      type="text"
                      {...field}
                      placeholder="Thing to complete"
                    />
                    {form.touched.description &&
                      form.errors.description &&
                      form.errors.description}
                  </FormField>
                </div>
              )}
            />
            <Button type="submit" primary label="Add" />
          </Form>
        )}
      />
    </div>
  );
};

export default TodoAdd;