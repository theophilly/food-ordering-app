import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Badge,
  Box,
  makeStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notification from '../layout/MainLayout/Header/NotificationSection.js';
import Profile from '../layout/MainLayout/Header/ProfileSection.js';
import Sidedrawer from './Sidedrawer.js';
import CartSection from '../layout/MainLayout/Header/CartSection.js';

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Meals',
    href: '/allmeals',
  },
  {
    label: 'About us',
    href: '/about',
  },
];

const useStyles = makeStyles({
  header: (props) => ({
    backgroundColor: 'transparent',
    position: props.pathname === '/' ? 'absolute' : 'static',
    top: 0,
    left: 0,
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingRight: '79px',
    paddingLeft: '98px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  }),
  logo: {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    color: 'black',
    textAlign: 'left',
    fontSize: '1.4rem',
  },
  menuButton: {
    fontWeight: 'bold',
    size: '18px',
    marginLeft: '20px',
    textTransform: 'capitalize',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '5px 0px',
    width: '280px',
  },
  logButtons: {
    display: 'flex',
  },
  signinButton: {
    borderRadius: '20px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  loginButton: {
    fontWeight: 'bold',
    marginLeft: '20px',
    borderRadius: '20px',
    backgroundColor: 'white',
    textTransform: 'capitalize',
  },
  spacerLogo: {
    visibility: 'hidden',
    width: 'calc(100vw - 206px)',
    border: '1px solid red',
    marginRight: '-25px',
  },
  personIcon: {
    marginRight: '6px',
  },
});

export default function Navbar() {
  const location = useLocation();
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cartReducer
  );

  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    logButtons,
    signinButton,
    loginButton,
    spacerLogo,
    personIcon,
  } = useStyles(location);

  const [state, setState] = useState({
    mobileView: true,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        <div className={logButtons}>
          {/* <Button
            component={RouterLink}
            to={'/login'}
            className={signinButton}
            variant="outlined"
          >
            sign in
          </Button>
          <Button
            component={RouterLink}
            to={'/login'}
            disableElevation
            className={loginButton}
            variant={location.pathname === '/' ? 'contained' : 'outlined'}
          >
            log in
          </Button> */}
          <div>
            <Profile />
            <CartSection />
            <Notification />
          </div>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',

          width: '100vw',
          marginRight: 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            {...{
              edge: 'start',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>
              {/* {getDrawerChoices()} */}
              <Sidedrawer onClose={handleDrawerClose} />
            </div>
          </Drawer>

          <div>{femmecubatorLogo}</div>
        </Box>

        <Box>
          <Profile />
          <CartSection />
          <Notification />
        </Box>
        {/* <div>
        
        {/* <PersonOutlineOutlinedIcon className={spacerLogo} />
        <PersonOutlineOutlinedIcon className={personIcon} />
        <Badge badgeContent={totalQuantities} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge> */}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link
      {...{
        component: RouterLink,
        to: '/',
        color: 'inherit',
        style: { textDecoration: 'none' },
      }}
      className={logo}
    >
      Theomeals
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar elevation={0} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
