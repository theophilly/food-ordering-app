import React from 'react';
import { OutlinedInput, Box, Typography, makeStyles } from '@material-ui/core';
import { useField } from 'formik';

const useStyles = makeStyles(() => ({
  log_input: {
    height: '43px',
    width: '100%',
    marginTop: '5px',
  },
}));

const Textfield = ({ name, helpertext, ...otherProps }) => {
  const { log_input } = useStyles();
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    color: 'secondary',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <Box>
      <Typography variant="caption">{helpertext}</Typography>
      <OutlinedInput className={log_input} {...configTextfield} />
      <Typography style={{ color: '#f44336' }} variant="caption">
        {configTextfield.helperText}
      </Typography>
    </Box>
  );
};

export default Textfield;
