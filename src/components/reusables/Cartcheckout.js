import React from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useDispatch } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';

//material ui style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    padding: '5px 25px',
    //  border: '1px solid red',
  },
  cart_cancelicon: {
    fontSize: '1rem',
    color: 'red',
    cursor: 'pointer',
  },
  cartImage: {
    height: '70px',
    width: '70px',
    marginRight: '4px',
  },
  food_name: {
    fontSize: '0.9rem',
  },
  cart_lower_div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px',
    width: '100%',
  },
  food_price: {
    fontSize: '0.8rem',
  },
}));

export default function Cartcheckout({
  image_path,
  _id,
  title,
  totalPrice,
  quantity,
}) {
  const {
    root,
    cart_cancelicon,
    cartImage,
    food_name,
    food_price,
    cart_lower_div,
  } = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={root}>
      <img className={cartImage} src={image_path} />
      <div style={{ width: '100%' }}>
        <Typography className={food_name}>{title}</Typography>
        <div className={cart_lower_div}>
          <Typography className={food_price}>#{totalPrice}</Typography>
          <CancelOutlinedIcon
            onClick={() => dispatch({ type: 'REMOVE', payload: _id })}
            className={cart_cancelicon}
          />
        </div>
      </div>
    </div>
  );
}
