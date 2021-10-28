import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noitemsfound from '../../utils/noitems-order.json';

// material - ui;

import {
  Avatar,
  Card,
  CardContent,
  makeStyles,
  Box,
  useTheme,
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
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { getUserOrders } from '../../store/actions/orderActions';
import NotFound from '../../pages/NotFound';

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
    fontWeight: '700',
    fontSize: '1.4rem',
    fontFamily: 'mulish',
    marginBottom: '10px',
    paddingLeft: '14px',
    marginTop: '30px',
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
  cell: {
    border: 'none',
  },
  more_details: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
}));

export default function Userorders() {
  const {
    root,
    profileheading,
    button,
    selected,
    cell,
    more_details,
  } = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  const state = useSelector((state) => state.orderReducer.orders);

  // data
  const checkStatus = (status) => {
    if (status === 'Delivered') {
      return (
        <Chip
          label={status}
          style={{ color: 'green', borderColor: 'green' }}
          variant="outlined"
        />
      );
    } else if (status === 'Failed') {
      return (
        <Chip
          label={status}
          style={{ color: '#f44336', borderColor: '#f44336' }}
          variant="outlined"
        />
      );
    } else if (status === 'Pending') {
      return <Chip label={status} color="primary" variant="outlined" />;
    }
  };

  //button for read more details
  const getDetailsButton = (item) => {
    return (
      <Typography
        className={more_details}
        state={{ from: '/profile/orders', item: item }}
        component={Link}
        to="/profile/o"
      >
        more details
      </Typography>
    );
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 200,
    },
    {
      field: 'payment_amount',
      headerName: 'Payment Amount',
      width: 160,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => checkStatus(params.row.status),
    },

    {
      field: 'more_details',
      headerName: 'Payment Method',
      width: 110,
      renderCell: (params) => getDetailsButton(params.row.item),
    },
  ];

  const prepareRows = () => {
    const orders = [];
    [...state].map((item) => {
      orders.push({
        id: item.paymentResult.id,
        date: new Date(item.createdAt).toLocaleDateString(),
        more_details: 'details',
        status: item.isDelivered,
        payment_amount: item.totalPrice,
        item: item,
      });
      console.log(state);
    });
    return orders;
  };

  const rows = prepareRows();

  return (
    <>
      {window.store.getState().orderReducer.orders.length === 0 ? (
        <NotFound
          animationData={noitemsfound}
          path="/allmeals"
          text="Make First Order"
        />
      ) : (
        <div
          style={{
            width: '100%',
            borderRadius: '5px',
            background: 'white',
            padding: '10px',
            height: 'max-content',
          }}
        >
          <Typography className={profileheading} variant="h1">
            My Order History
          </Typography>

          <Box height="max-content !important">
            <DataGrid
              classes={{ root: cell }}
              autoHeight={true}
              rowHeight={80}
              showCellRightBorder={false}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection={false}
              disableSelectionOnClick
              disableMultipleSelection={true}
            />
          </Box>
        </div>
      )}
    </>
  );
}
