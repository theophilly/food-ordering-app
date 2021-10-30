import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  home_menu_item: {
    border: '1px solid #F2F2F2',
    height: '250px',
    width: '200px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    padding: '7px',
    marginRight: '20px',
    marginTop: '20px',
    transition: 'all 0.6s ease-in-out',
    '&:hover': {
      background: theme.palette.primary.main,
      '& button': {
        background: 'white',
      },
    },
  },
  hmi_img_div: {
    display: 'flex',
    justifyContent: 'center',
  },
  hmi_img: {
    height: '100px',
    width: '100px',
  },
  hmi_food_title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.9rem',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  hmi_food_price: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.9rem',
    fontWeight: 'bold',
  },
  hmi_food_subtitle: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    marginTop: '2px',
  },
  hmi_food_colories: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    color: 'red',
    marginTop: '4px',
  },
  cart_button: {
    textTransform: 'lowercase',
    fontFamily: 'Inter, sans-serif',
    fontSize: '.7rem',
    fontWeight: 'bold',
    borderRadius: '7px',
    height: '30px',
  },
  lower_div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '35px',
    marginTop: '20px',
  },
}));

export default function Homemenuitem({
  image_path,
  title,
  sub_title,
  colories,
  price,
}) {
  const {
    home_menu_item,
    hmi_img,
    hmi_img_div,
    hmi_food_title,
    hmi_food_subtitle,
    hmi_food_colories,
    cart_button,
    lower_div,
    hmi_food_price,
  } = useStyles();
  return (
    <div className={home_menu_item}>
      <div className={hmi_img_div}>
        <img className={hmi_img} src={image_path} />
      </div>
      <Typography className={hmi_food_title} variant="h2" component="h1">
        {title}
      </Typography>
      <Typography className={hmi_food_subtitle} variant="h2" component="h1">
        {sub_title}
      </Typography>
      <Typography className={hmi_food_colories} variant="h2" component="h1">
        {colories}
      </Typography>
      <div className={lower_div}>
        <Typography className={hmi_food_price} variant="h2" component="h1">
          {price}
        </Typography>
        <Button
          disableElevation={true}
          color="primary"
          variant="contained"
          className={cart_button}
        >
          New
        </Button>
      </div>
    </div>
  );
}
