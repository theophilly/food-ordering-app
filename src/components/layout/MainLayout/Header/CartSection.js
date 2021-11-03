import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Snackbar from '../../../reusables/Snackbar';

// material-ui

import { Avatar, Box, makeStyles, ButtonBase, Badge } from '@material-ui/core';

// assets
import { IconShoppingCart } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
  headerAvatar: {
    cursor: 'pointer',
    borderRadius: '8px',
    width: '34px',
    marginRight: '5px',
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
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {},
  },
}));

// ===========================|| Cart ||=========================== //
const CartSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { totalQuantities } = useSelector((state) => state.cartReducer);
  const [alertContent, setAlertContent] = React.useState({
    type: 'error',
    content: '',
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const onClickCart = async () => {
    if (totalQuantities > 0) {
      navigate('/checkout');
    } else {
      await setAlertContent({
        type: 'warning',
        content: 'sorry there are no items in cart',
      });
      handleClick();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box component="span" className={classes.box}>
      <Snackbar
        alertContent={alertContent}
        open={open}
        handleClose={handleClose}
      />
      <ButtonBase onClick={onClickCart}>
        <Badge
          color="secondary"
          badgeContent={totalQuantities}
          overlap="circular"
        >
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
