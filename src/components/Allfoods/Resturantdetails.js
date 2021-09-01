import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '42vh',
    background: '#F9F9F9',
    border: '1px solid red',
    padding: '40px',
  },
  root_img: {
    height: '190px',
    width: '320px',
  },
}));

export default function Resturantdetails() {
  const { root, root_img } = useStyles();
  return (
    <div className={root}>
      <img className={root_img} src="./252.png"></img>
      <div></div>
    </div>
  );
}
