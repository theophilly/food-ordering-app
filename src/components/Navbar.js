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
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const headersData = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Meals',
    href: '/meals',
  },
  {
    label: 'About us',
    href: '/about',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: 'black',
    textAlign: 'left',
  },
  menuButton: {
    // fontFamily: 'Open Sans, sans-serif',
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
    padding: '20px 30px',
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
  },
  personIcon: {
    marginRight: '6px',
  },
}));

export default function Navbar() {
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
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
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
          <Button className={signinButton} variant="outlined">
            sign in
          </Button>
          <Button disableElevation className={loginButton} variant="contained">
            log in
          </Button>
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
      <Toolbar>
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
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <PersonOutlineOutlinedIcon className={spacerLogo} />
        <PersonOutlineOutlinedIcon className={personIcon} />
        <ShoppingCartOutlinedIcon />
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
    <Typography variant="h6" component="h1" className={logo}>
      Theomeals
    </Typography>
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
