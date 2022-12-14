import { ErrorMessage, Field } from 'formik';
import React, { ReactElement } from 'react';
import TextError from './TextError';

const Select = (props: any): ReactElement => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form_control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option: any) => {
          return (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
