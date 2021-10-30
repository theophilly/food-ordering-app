import React from 'react';
import {
  makeStyles,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles(() => ({
  select_input: {
    maxHeight: '43px !important',
    width: '100%',
    marginTop: '5px',
  },
  deliverybox: {
    flex: '0.49',
    border: '1px solid #C4C4C4',
    borderRadius: '10px',
    padding: '10px 20px',
  },
  deliverybox_group: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      '& :nth-child(2)': {
        marginTop: '10px',
      },
    },
  },
  deliverybox_header: {
    display: 'flex',
    alignItems: 'center',
  },
  deliverymethod_info: {
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.6)',
  },
  free: {
    fontWeight: '700',
  },
  free2: {
    fontWeight: '700',
    fontSize: '0.9rem',
  },
}));

const RadioWrapper = ({ name, options, ...otherProps }) => {
  const {
    select_input,
    free,
    free2,
    deliverybox_header,
    deliverybox,
    deliverymethod_info,
    deliverybox_group,
  } = useStyles();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    variant: 'outlined',
    color: 'secondary',
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <div>
      <RadioGroup {...configSelect}>
        <div className={deliverybox_group}>
          <div className={deliverybox}>
            <div className={deliverybox_header}>
              <FormControlLabel
                value="free"
                control={<Radio />}
                label="Standard Delivery!"
              />
              <Typography className={free}>free</Typography>
            </div>
            <Typography className={deliverymethod_info}>
              Estimated 1-2 hours delivery time <br></br>
              (Duties and Taxes may be due upo delivery)
            </Typography>
          </div>
          <div className={deliverybox}>
            <div className={deliverybox_header}>
              <FormControlLabel
                value="paid"
                control={<Radio />}
                label="Fast Delivery."
              />
              <Typography className={free2}>#1,000</Typography>
            </div>
            <Typography className={deliverymethod_info}>
              Estimated 30 min - 1 hours delivery time <br></br>
              (Duties and Taxes may be due upo delivery)
            </Typography>
          </div>
        </div>
      </RadioGroup>
      <Typography style={{ color: '#f44336' }} variant="caption">
        {configSelect.helperText}
      </Typography>
    </div>
  );
};

export default RadioWrapper;
