import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Toolbar,
  Avatar,
  Button,
  List,
  Box,
  styled,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { BiHomeCircle } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import { MdContacts } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

// links for the side nav
const links = [
  {
    id: 'L0',
    path: '/',
    icon: <BiHomeCircle />,
    title: 'Home',
  },
  { id: 'L1', path: '/allmeals', icon: <IoFastFood />, title: 'All Meals' },
];

// style const
const useStyles = makeStyles((theme) => ({
  label: {
    marginRight: '20px',
  },
  selected: {
    color: '#1275D1 !important',
    background: '#E2ECF6 !important',
    '& :hover': {
      color: 'inherit',
      background: '#E2ECF6',
    },
  },
  drawerheading: {
    fontWeight: '600',
    fontSize: '1.6rem',
    fontFamily: 'mulish',
    color: '#1275D1',
  },
  button: {
    borderRadius: '0',
    padding: '10px 8px 10px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    background: 'transparent',
    color: 'rgb(99, 115, 129)',
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
    paddingLeft: '20px',
    width: '90%',
    height: '60px',
    margin: '0 auto',
    borderRadius: '15px',
    marginTop: '15px',

    '& h2': {
      marginLeft: '10px',
      fontSize: '1rem',
    },
  },
}));

const ListStyle = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export default function Sidedrawer(props) {
  const { label, drawerheading, button, usersection, selected } = useStyles();
  const auth = useSelector((state) => state.authReducer);

  const userData = () => {
    return (
      <Box className={usersection}>
        <Avatar sx={{ width: 60, height: 60 }} alt="John Doe">
          <AiOutlineUser />
        </Avatar>
        <Typography component="h2">
          {auth.authenticated ? auth.user.firstName : 'John Doe'}
        </Typography>
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
      {/* List of links */}
      <ListStyle>
        {links.map((link, index) => (
          <Button
            key={index}
            classes={{ startIcon: label }}
            end="true"
            disableElevation
            className={button}
            variant="contained"
            autoCapitalize="none"
            startIcon={link.icon}
            component={NavLink}
            to={link.path}
            onClick={props.onClose}
          >
            {link.title}
          </Button>
        ))}
        <Button
          classes={{ startIcon: label }}
          end="true"
          disableElevation
          className={button}
          variant="contained"
          autoCapitalize="none"
          startIcon={<MdContacts />}
          onClick={() =>
            (location.href = 'https://myreactprofile.netlify.app/')
          }
        >
          About Me
        </Button>
      </ListStyle>
    </>
  );
}
