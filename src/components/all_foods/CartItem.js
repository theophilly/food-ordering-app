import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid red',
    marginTop: '20px',
    '& > :nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& > :nth-child(2)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
    },
  },
  cart_items_button: {
    display: 'flex',

    '& button': {
      backgroundColor: theme.palette.green,
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      height: '30px',
      width: '30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& h1': {
      fontWeight: '600',
      fontSize: '0.9rem !important',
      height: '30px',
      width: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      borderTop: `1px solid #dedede`,
      borderBottom: `1px solid #dedede`,
    },
  },
  cart_foodname: {
    fontFamily: 'Mulish',
    fontWeight: '800',
  },
  cart_price: {
    // fontFamily: 'Mulish',
    color: theme.palette.lightdark2,
    fontSize: '0.9rem',
  },
  cart_cancelicon: {
    fontSize: '1rem',
    color: 'red',
    cursor: 'pointer',
  },
}));

export default function CartItem({ _id, title, totalPrice, quantity }) {
  const dispatch = useDispatch();
  const {
    root,
    cart_items_button,
    cart_foodname,
    cart_price,
    cart_cancelicon,
  } = useStyles();
  return (
    <div className={root}>
      <div>
        <Typography className={cart_foodname}>{title}</Typography>
        <Typography className={cart_price}>#{totalPrice}</Typography>
      </div>
      <div>
        <div className={cart_items_button}>
          <button
            onClick={() => dispatch({ type: 'INC_SINGLE', payload: { _id } })}
          >
            -
          </button>
          <Typography variant="h1">{quantity}</Typography>
          <button
            onClick={() =>
              dispatch({
                type: 'INC_SINGLE',
                payload: { _id, increment: true },
              })
            }
          >
            +
          </button>
        </div>
        <CancelOutlinedIcon
          onClick={() => dispatch({ type: 'REMOVE', payload: _id })}
          className={cart_cancelicon}
        />
      </div>
    </div>
  );
}
