import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import styles from './InputFiels.styled';
import {useTheme} from '@mui/material/styles'

const InputField = props => {
  const theme = useTheme()
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
      InputLabelProps={{
        style: { color: `${theme.colors.text}`},
      }}
      inputProps={{ style: { color: `${theme.colors.text}` } }}
      {...field}
      {...rest}
    />
  );
};

export default InputField;
