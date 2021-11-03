import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import { FaAddressCard, FaShoppingBag } from 'react-icons/fa';

// material-ui
import { makeStyles, Button, Grid, Typography, Box } from '@material-ui/core';

// links for the side nav
const links = [
  {
    id: 'L0',
    path: '/profile/details',
    icon: <PersonOutlineOutlinedIcon />,
    title: 'My Details',
  },

  {
    id: 'L2',
    path: '/profile/orders',
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
      padding: '0 20px',
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
    width: '250px',

    '&:hover': {
      color: '#1275D1',
      background: '#E2ECF6',
    },
  },
  selected: {
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    alignItems: 'left',
    width: '250px',
    color: '#1275D1 !important',
    background: '#E2ECF6',
    '&:hover': {
      color: '#1275D1 !important',
      background: '#E2ECF6 !important',
    },
  },
  profile_sidebar: {
    marginBottom: '20px',
    '@media (max-width: 1230px)': {
      // display: 'none',
    },
  },
}));

export default function Userprofile() {
  const {
    root,
    profileheading,
    button,
    selected,
    profile_sidebar,
  } = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    pathname === '/profile' ? navigate('/profile/details') : null;
  });

  return (
    <Box className={root}>
      <Grid container>
        <Grid style={{ marginTop: '40px' }} item>
          <Typography className={profileheading}>My Account</Typography>
        </Grid>
      </Grid>
      <Grid style={{ marginTop: '20px' }} container>
        <Grid className={profile_sidebar} xs={3} item>
          {/* grid for list nav */}
          <Grid container>
            <Grid item>
              {links.map((link, index) => (
                <Button
                  key={index}
                  disableElevation
                  className={pathname === link.path ? selected : button}
                  variant="contained"
                  autoCapitalize="none"
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
        <Grid xs={12} md={9} item>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
