import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '70px',
    transition: 'all 1s ease',
    '@media (max-width: 850px)': {
      marginRight: '15px',
    },
  },
  root_min: {
    fontSize: '0.9rem',
    fontWeight: '500',
    '@media (max-width: 850px)': {
      fontSize: '0.7rem',
    },
  },
  root_time: {
    color: theme.palette.lightdark1,
    fontSize: '0.7rem',
    marginTop: '4px',
    '@media (max-width: 850px)': {
      fontSize: '0.7rem',
    },
  },
}));

export default function DPA({ time, min }) {
  const { root_min, root_time, root } = useStyles();
  return (
    <div className={root}>
      <Typography className={root_min} component="h3">
        {min}
      </Typography>
      <Typography className={root_time} component="h3">
        {time}
      </Typography>
    </div>
  );
}
