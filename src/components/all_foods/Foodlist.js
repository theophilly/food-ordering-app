import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SingleFoodItem from './SingleFoodItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '200vh',

    'fontFamily': 'inter, sans-serif',
    '@media (max-width: 850px)': {
      marginRight: '15px',
    },
  },
  menu_section: {
    padding: '20px',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: 0,
    alignSelf: 'flex-start',
    flex: 2.5,
    width: '300px',
    //maxHeight: '80vh',
    // left: 0,
    '& h1': {
      // color: theme.palette.lightdark3,
      fontSize: '1.3rem',
      fontFamily: 'Mulish',
      fontWeight: 600,
    },
    '& ul': {
      listStyleType: 'none',
      textAlign: 'end',
      marginBottom: '25px',
      '& li': {
        marginTop: '25px',
        color: '#666666',
        fontSize: '0.9rem',
      },
    },
  },
  food_list: {
    borderLeft: '1px solid #ebebeb',
    borderRight: '1px solid #ebebeb',
    flex: 5,
    //  marginLeft: '300px',
    //  marginRight: '300px',
  },
  searchSection: {
    height: '60px',
    display: 'flex',
    borderBottom: '1px solid #ebebeb',
    alignItems: 'center',
    paddingLeft: '15px',
    position: 'sticky',
    zIndex: 999,
    background: 'white',
    top: 7,

    '& input': {
      flex: 1,
      height: '100%',
      border: 'none',
      outline: 'none',
    },
    '& input::placeholder': {
      fontSize: '.9rem',
    },
  },
  searchIcon: {
    width: '40px',
    color: theme.palette.lightdark2,
  },
  cart: {
    position: 'sticky',
    alignSelf: 'flex-start',
    top: 0,
    maxHeight: '80vh',
    flex: 2.5,
    padding: '20px',
    '& h1': {
      color: theme.palette.lightdark3,
      fontSize: '1.3rem',
      fontFamily: 'Mulish',
    },
  },
}));

export default function Foodlist() {
  const {
    root,
    menu_section,
    food_list,
    cart,
    searchSection,
    searchIcon,
  } = useStyles();
  return (
    <div className={root}>
      <div className={menu_section}>
        <h1>Menu</h1>
        <ul>
          <li>Fried Rice</li>
          <li>Side Orders</li>
          <li>Chinese Plates</li>
        </ul>
        <h1>Overview</h1>
      </div>
      <div className={food_list}>
        <div className={searchSection}>
          <SearchIcon className={searchIcon} />
          <input placeholder="Search For Dishes" />
        </div>
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
        <SingleFoodItem />
      </div>
      <div className={cart}>
        <h1>Your cart</h1>
      </div>
    </div>
  );
}
