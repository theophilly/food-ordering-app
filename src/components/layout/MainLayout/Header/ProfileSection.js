import React from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// material-ui
import {
  CardContent,
  makeStyles,
  useTheme,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Typography,
  Button,
} from '@material-ui/core';

// third-party
import { RiProfileLine } from 'react-icons/ri';
import { BiHomeCircle } from 'react-icons/bi';

import { ImEnter } from 'react-icons/im';
import { FcLowPriority } from 'react-icons/fc';

import { FaShoppingBag } from 'react-icons/fa';

// links for the side nav
const signedinUserLinks = [
  {
    id: 'L9',
    path: '/',
    icon: <BiHomeCircle />,
    title: 'Home',
  },
  {
    id: 'L0',
    path: '/profile/details',
    icon: <RiProfileLine />,
    title: 'Dashboard',
  },

  {
    id: 'L2',
    path: '/allmeals',
    icon: <FaShoppingBag />,
    title: 'Meals',
  },
  {
    id: 'L1',
    path: '/signout',
    icon: <AiOutlinePoweroff style={{ color: 'red' }} />,
    title: 'Sign Out',
  },
];
// unregistered links for the side nav
const unSignedinUserLinks = [
  {
    id: 'L9',
    path: '/',
    icon: <BiHomeCircle />,
    title: 'Home',
  },

  {
    id: 'L2',
    path: '/allmeals',
    icon: <FaShoppingBag />,
    title: 'Meals',
  },
  {
    id: 'L1',
    path: '/login',
    icon: <ImEnter />,
    title: 'Sign In',
  },
  {
    id: 'L6',
    path: '/login',
    icon: <FcLowPriority />,
    title: 'Sign Up',
  },
];

// project imports
import MainCard from '../../../../ui-component/cards/MainCard.js';
import Transitions from '../../../../ui-component/extended/Transitions.js';

// assets
import { IconUser } from '@tabler/icons';
import { AiOutlinePoweroff } from 'react-icons/ai';

// style const
const useStyles = makeStyles((theme) => ({
  profileChip: {
    height: '35px',
    alignItems: 'center',
    borderRadius: '10px',
    marginRight: '5px',
    border: 'none',
    transition: 'all .2s ease-in-out',
    background: '#E2ECF6 !important',
    color: '#1275D1',
    '&[aria-controls="menu-list-grow"],&:hover': {
      background: '#1275D1 !important',
      color: theme.palette.secondary.light,
      '& svg': {
        stroke: theme.palette.secondary.light,
      },
    },
    '@media (max-width: 400px)': {
      width: '34px',
      height: '34px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: '12px',
    '@media (max-width: 400px)': {
      display: 'none',
    },
  },
  icon: {
    '@media (max-width: 400px)': {
      margin: '0px !important',
    },
  },
  cardContent: {
    padding: '20px 0px !important',
    height: 'max-content',
    width: '250px',
    maxWidth: '250px',
    overflow: 'hidden',
  },
  flex: {
    display: 'flex',
    marginLeft: '34px',
    fontSize: '.94rem !important',
  },
  name: {
    marginLeft: '2px',
    fontWeight: 400,
  },
  button: {
    borderRadius: '0px',
    display: 'flex',
    paddingLeft: '35px',
    height: '50px',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    background: 'transparent',
    color: 'black',
    alignItems: 'left',
    width: '300px',

    '&:hover': {
      color: '#1275D1',
      background: '#E2ECF6',
    },
  },
  selected: {
    borderRadius: '0px',
    paddingLeft: '35px',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    alignItems: 'left',
    width: '300px',
    color: '#1275D1 !important',
    background: '#E2ECF6',
    '&:hover': {
      color: '#1275D1 !important',
      background: '#E2ECF6 !important',
    },
  },
  button_text: {
    marginRight: '30px !important',
  },
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const classes = useStyles();
  const { button, selected, button_text } = useStyles();
  const theme = useTheme();
  const { pathname } = useLocation();
  const state = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const [dropDownData, setDropDownData] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (state.authenticated) {
      setDropDownData(signedinUserLinks);
    } else {
      setDropDownData(unSignedinUserLinks);
    }
  }, [state.authenticated]);

  const anchorRef = React.useRef(null);
  const handleLogout = async () => {
    dispatch({ type: 'SIGN_OUT' });
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <React.Fragment>
      <Chip
        classes={{ label: classes.profileLabel, icon: classes.icon }}
        className={classes.profileChip}
        icon={<IconUser stroke={1.5} size="1.3rem" />}
        label={
          <Typography>
            {state.authenticated ? `  ${state.user.firstName}` : 'Account'}
          </Typography>
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        style={{ zIndex: 1000000000, marginTop: '5px' }}
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item className={classes.flex}>
                        <Typography
                          style={{ fontSize: '.94rem' }}
                          variant="subtitle1"
                        >
                          Welcome,
                        </Typography>
                        <Typography
                          component="span"
                          style={{ fontSize: '.94rem' }}
                          variant="subtitle1"
                          className={classes.name}
                        >
                          {state.authenticated
                            ? `  ${state.user.firstName}`
                            : 'User'}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Divider
                      style={{ marginBottom: '10px', marginTop: '10px' }}
                    />

                    {/* grid for list nav */}
                    <Grid container>
                      <Grid item>
                        {dropDownData.map((link, index) => (
                          <Button
                            disableElevation
                            key={index}
                            onClick={() => {
                              handleClose(event);
                              link.title === 'Sign Out' && handleLogout();
                            }}
                            className={
                              pathname === link.path ? selected : button
                            }
                            variant="contained"
                            classes={{ startIcon: button_text }}
                            autoCapitalize="none"
                            startIcon={link.icon}
                            component={NavLink}
                            to={link.path}
                            state={
                              link.title === 'Sign Up' && {
                                show: 'signup',
                              }
                            }
                          >
                            {link.title}
                          </Button>
                        ))}
                      </Grid>
                    </Grid>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ProfileSection;
