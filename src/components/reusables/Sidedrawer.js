import React from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Badge,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

// style const
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#F4F6F8',
    minHeight: '100vh',
    paddingRight: '79px',
    paddingLeft: '120px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  drawerheading: {
    fontWeight: '700',
    fontSize: '1.6rem',
    fontFamily: 'mulish',
    color: '#1275D1',
    // letterSpacing: '2px',
  },
  button: {
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    background: 'transparent',
    color: 'black',
    alignItems: 'left',
    width: '280px',

    '&:hover': {
      color: '#1275D1',
      background: '#E2ECF6',
    },
  },
  usersection: {
    background: 'rgb(223, 223, 223)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '75px',
    margin: '0 auto',
    borderRadius: '15px',
    marginTop: '15px',

    '& h2': {
      // fontWeight: '500',
      marginLeft: '10px',
      fontSize: '1.2rem',
      //   fontFamily: 'mulish',
    },
  },
}));

export default function Sidedrawer() {
  const { root, drawerheading, button, usersection, cell } = useStyles();

  const userData = () => {
    return (
      <Box className={usersection}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          alt="Travis Howard"
          src="https://randomuser.me/api/portraits/women/57.jpg"
        />
        <Typography component="h2">Travis Howard</Typography>
      </Box>
    );
  };
  return (
    <>
      <Toolbar>
        <Typography className={drawerheading} variant="h6" component="h2">
          Hello
        </Typography>
      </Toolbar>
      {userData()}
    </>
  );
}
