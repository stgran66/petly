import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import styles from './InputFiels.styled';

const InputField = props => {
  const { Input} = styles;
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
   
      <Input
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        {...field}
        {...rest}
      />
  
  );
};

export default InputField;
