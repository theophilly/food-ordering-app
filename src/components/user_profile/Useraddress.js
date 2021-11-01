import React from 'react';

// material-ui
import { Typography, makeStyles, Box } from '@material-ui/core';

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
  profileheading: {
    fontWeight: '600',
    fontSize: '1.3rem',
    fontFamily: 'mulish',
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
  selected: {
    color: '#1275D1',
    background: '#E2ECF6',
    '& :hover': {
      color: 'inherit',
      background: '#E2ECF6',
    },
  },
}));

export default function Useraddress() {
  const { root, profileheading, button, selected } = useStyles();

  return (
    <Box
      style={{
        width: '100%',
        borderRadius: '5px',
        minHeight: '1000px',
        background: 'white',
      }}
    >
      <Typography>address</Typography>
    </Box>
  );
}
