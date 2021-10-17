import React from 'react';
import { Link } from 'react-router-dom';

// material-ui

import {
  Avatar,
  Box,
  makeStyles,
  useTheme,
  ButtonBase,
  Badge,
} from '@material-ui/core';

// assets
import { IconShoppingCart } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
  headerAvatar: {
    cursor: 'pointer',
    borderRadius: '8px',
    width: '34px',
    height: '34px',
    fontSize: '1.2rem',
    transition: 'all .2s ease-in-out',
    background: '#E2ECF6',
    color: '#1275D1',
    '&[aria-controls="menu-list-grow"],&:hover': {
      background: '#1275D1',
      color: theme.palette.secondary.light,
    },
  },

  box: {
    overflow: 'hidden',
    // marginLeft: '16px',
    // marginRight: '24px',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      // marginRight: '16px',
    },
  },
}));

// ===========================|| Cart ||=========================== //

const CartSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box component="span" className={classes.box}>
      <ButtonBase>
        <Badge color="secondary" badgeContent={1} overlap="circular">
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            color="inherit"
          >
            <IconShoppingCart stroke={1.5} size="1.3rem" />
          </Avatar>
        </Badge>
      </ButtonBase>
    </Box>
  );
};

export default CartSection;