import React from 'react';
import {
  MenuItem,
  makeStyles,
  Typography,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const useStyles = makeStyles(() => ({
  deliverybox: {
    flex: '1',
    border: '1px solid #C4C4C4',
    borderRadius: '10px',
    padding: '15px 20px',
  },
  deliverybox_header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliverymethod_info: {
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.6)',
  },

  paystack_img: {
    height: '50px',
  },
}));

const Paymentmethod = ({ name, options, ...otherProps }) => {
  const {
    paystack_img,
    deliverybox_header,
    deliverybox,
    deliverymethod_info,
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div className={deliverybox}>
            <div className={deliverybox_header}>
              <FormControlLabel
                value="paystack"
                control={<Radio />}
                label="Paystack"
              />
              <img src="./paystack.png" className={paystack_img} />
            </div>
            <Typography className={deliverymethod_info}>
              You will be redirected to Paystack website to complete your{' '}
              <br></br>
              purchase securely
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

export default Paymentmethod;
