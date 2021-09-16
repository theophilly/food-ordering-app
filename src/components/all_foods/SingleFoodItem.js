import React from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '20px',
    // border: '1px solid red',
    'fontFamily': 'inter, sans-serif',
    '@media (max-width: 850px)': {},
  },
  foodimage: {
    height: '90px',
    width: '100px',
  },
  foodinformation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    flex: 1,
    marginLeft: '20px',
  },
  foodname: {
    position: 'relative',
    fontFamily: 'Mulish',
    display: 'flex',
  },
  food_details: {
    color: theme.palette.lightdark3,
    fontSize: '.9rem',
    marginTop: '4px',
  },
  food_price: {
    color: theme.palette.lightdark3,
    fontSize: '.9rem',
    color: 'tomato',
  },
  tag__red: {
    marginTop: '5px',
    marginLeft: '7px',
    border: '1px solid red',
    height: '12px',
    width: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& span': {
      height: '6px',
      width: '6px',
      background: 'red',
      borderRadius: '100%',
    },
  },
  tag__green: {
    marginTop: '5px',
    marginLeft: '7px',
    border: '1px solid green',
    height: '12px',
    width: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& span': {
      height: '6px',
      width: '6px',
      background: 'green',
      borderRadius: '100%',
    },
  },
  add_button: {
    // border: `1px solid ${theme.palette.primary.main}`,
    border: `1px solid rgb(76, 161, 70)`,
    height: '32px',
    width: '80px',
    color: 'rgb(76, 161, 70)',
    //fontSize: '0.9rem',

    '&:hover': {
      backgroundColor: 'rgb(76, 161, 70)',
      color: 'white',
      padding: '0px',
    },
  },
}));

export default function SingleFoodItem() {
  const {
    root,
    foodimage,
    tag__red,
    foodinformation,
    foodname,
    tag__green,
    add_button,
    food_details,
    food_price,
  } = useStyles();
  return (
    <div className={root}>
      <img className={foodimage} src="./100.png" />
      <div className={foodinformation}>
        <div>
          <Typography className={foodname}>
            Penn Cove Mussels
            <span className={tag__green}>
              <span>&nbsp;</span>
            </span>
          </Typography>
          <Typography className={food_details}>
            Thai Style Red Curry, Crusty Bread
          </Typography>
        </div>
        <Typography className={food_price}>#4000.00</Typography>
      </div>
      <Button className={add_button} startIcon={<AddIcon />}>
        ADD
      </Button>
    </div>
  );
}
