import React, { ReactElement } from 'react';
import { ErrorMessage, Field } from 'formik';
import DateView from 'react-datepicker';
import TextError from './TextError';
import 'react-datepicker/dist/react-datepicker.css';

const DatetimePicker = (props: any): ReactElement => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <div className="form_control">
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
          {({ form, field }: any) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
};

export default DatetimePicker;
