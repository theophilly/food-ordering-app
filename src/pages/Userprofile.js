import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import { FaAddressCard, FaShoppingBag } from 'react-icons/fa';

// material-ui
import {
  Avatar,
  Card,
  CardContent,
  makeStyles,
  useTheme,
  Button,
  Chip,
  ButtonBase,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  ListItem,
  Box,
} from '@material-ui/core';
import Mydetails from '../components/user_profile/Mydetails';

// links for the side nav
const links = [
  {
    id: 'L0',
    path: '/profile',
    icon: <PersonOutlineOutlinedIcon />,
    title: 'My Details',
  },
  {
    id: 'L1',
    path: '/address',
    icon: <FaAddressCard />,
    title: 'My address book',
  },
  {
    id: 'L2',
    path: '/orders',
    icon: <FaShoppingBag />,
    title: 'my orders',
  },
];

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

export default function Userprofile() {
  const { root, profileheading, button, selected } = useStyles();

  return (
    <Box className={root}>
      <Grid container>
        <Grid style={{ marginTop: '40px' }} item>
          <Typography className={profileheading}>My Account</Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '20px' }} container>
        <Grid style={{ minHeight: '20px' }} xs={3} item>
          {/* grid for list nav */}
          <Grid container>
            <Grid item>
              {links.map((link) => (
                <Button
                  disableElevation
                  className={button}
                  variant="contained"
                  activeClassName={selected}
                  autoCapitalize={false}
                  startIcon={link.icon}
                  component={NavLink}
                  to={link.path}
                >
                  {link.title}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ minHeight: '20px' }} xs={9} item>
          <Mydetails />
        </Grid>
      </Grid>
    </Box>
  );
}
