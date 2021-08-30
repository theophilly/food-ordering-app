import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Homemenuitem from './Homemenuitem';
import menudata from '../utils/menudata';

const useStyles = makeStyles((theme) => ({
  homemenu: {
    padding: '50px 0px',
  },
  leaderBoard_left_h1: {
    lineHeight: '40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginTop: '17px',
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
}));

export default function Homemenu() {
  const {
    leaderBoard_left_h1,
    homemenu_menu,
    homemenu_explore,
    homemenu,
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
    </div>
  );
}
