import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Homemenuitem from './Homemenuitem';
import menudata from '../utils/menudata';

const useStyles = makeStyles((theme) => ({
  homemenu: {
    padding: '50px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leaderBoard_left_h1: {
    lineHeight: '40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginTop: '17px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  homemenu_menu: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '.9rem',
    fontWeight: 'bold',
  },
  homemenu_explore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  homemenu_data: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    paddingTop: '50px',
  },
  button: {
    borderRadius: '20px',
    width: '150px',
    marginTop: '10px',
    textTransform: 'lowercase',
    background: 'white',
    border: '1px solid grey',
  },
}));

export default function Homemenu() {
  const {
    leaderBoard_left_h1,
    homemenu_menu,
    homemenu_explore,
    homemenu,
    button,
    homemenu_data,
  } = useStyles();
  return (
    <div className={homemenu}>
      <div className={homemenu_explore}>
        <Typography className={homemenu_menu} variant="h1" component="h1">
          Menu
        </Typography>
        <Typography className={leaderBoard_left_h1} variant="h2" component="h1">
          Explore our featured food
        </Typography>
      </div>

      <div className={homemenu_data}>
        {menudata.map((data) => (
          <Homemenuitem {...data} />
        ))}
      </div>
      <Button
        disableElevation
        className={button}
        variant="contained"
        autoCapitalize={false}
        endIcon={<ArrowRightAltIcon />}
      >
        see all food
      </Button>
    </div>
  );
}
