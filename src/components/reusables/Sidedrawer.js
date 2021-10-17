import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Avatar,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  List,
  Badge,
  Box,
  styled,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { BiHomeCircle } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import { MdContacts } from 'react-icons/md';
import CustomListItem from './Customlistitem';

// links for the side nav
const links = [
  {
    id: 'L0',
    path: '/',
    icon: <BiHomeCircle />,
    title: 'Home',
  },
  { id: 'L1', path: '/allmeals', icon: <IoFastFood />, title: 'All Meals' },
  {
    id: 'L2',
    path: '/about',
    icon: <MdContacts />,
    title: 'About Us',
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
  selected: {
    border: '1px solid red',
    color: '#1275D1 !important',
    background: '#E2ECF6 !important',
    '& :hover': {
      color: 'inherit',
      background: '#E2ECF6',
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
    padding: '8px 8px 8px 20px',
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
    height: '70px',
    margin: '0 auto',
    borderRadius: '15px',
    marginTop: '15px',

    '& h2': {
      // fontWeight: '500',
      marginLeft: '10px',
      fontSize: '1.1rem',
      //   fontFamily: 'mulish',
    },
  },
}));

const ListStyle = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export default function Sidedrawer(props) {
  const { root, drawerheading, button, usersection, selected } = useStyles();

  const userData = () => {
    return (
      <Box className={usersection}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          alt="Travis Howard"
          src="https://randomuser.me/api/portraits/women/57.jpg"
        />
        <Typography component="h2">John Doe</Typography>
      </Box>
    );
  };
  return (
    <>
      <Toolbar>
        <Typography className={drawerheading} variant="h6" component="h2">
          Theomeals
        </Typography>
      </Toolbar>
      {userData()}
      {/* List of links */}
      <ListStyle>
        {links.map((link) => (
          <Button
            end={true}
            disableElevation
            className={button}
            variant="contained"
            activeClassName={selected}
            autoCapitalize={false}
            startIcon={link.icon}
            component={NavLink}
            to={link.path}
            onClick={props.onClose}
          >
            {link.title}
          </Button>
          //   <CustomListItem
          //     key={el.id}
          //     path={el.path}
          //     icon={el.icon}
          //     title={el.title}
          //     onClick={props.onClose}
          //   />
        ))}
      </ListStyle>
    </>
  );
}
