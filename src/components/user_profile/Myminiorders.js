import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

// material-ui
import { makeStyles, Box, Chip, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

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

// style const
const useStyles = makeStyles((theme) => ({
  root_logo: {
    fontSize: '1.2rem',
    fontWeight: '500',
    fontFamily: 'Mulish',
    marginLeft: '5px',
  },
  root_logo_wrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileheading: {
    fontWeight: '600',
    fontSize: '1.3rem',
    fontFamily: 'mulish',
    paddingLeft: '14px',
  },
  userdetails_heading: {
    fontWeight: '600',
    fontSize: '1.3rem',
    fontFamily: 'mulish',
    paddingLeft: '14px',
  },
  cell: {
    border: 'none',
  },
  userDetails: {
    paddingLeft: '14px',
    marginTop: '7px',

    '& > *': {
      marginTop: '5px',
      fontSize: '.95rem',
    },
    '& span': {
      color: 'gray',
    },
  },
}));

export default function Myminiorders() {
  const {
    profileheading,
    userDetails,
    userdetails_heading,
    cell,
    root_logo_wrapper,
    root_logo,
  } = useStyles();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from;
  let item = location.state?.item;

  //reorder cart peoduct arrays
  const prepareRows = () => {
    let newH = [];
    item.orderItems.map((item) => {
      newH.push({
        id: item._id,
        totalPrice: item.totalPrice,
        quantity: item.quantity,
        image: item.image_path,
        food_name: item.title,
        category: item.category,
      });
    });
    return newH;
  };

  if (from === undefined) {
    return <Navigate to="/profile/orders" />;
  }

  const columns = [
    {
      field: 'food_name',
      headerName: 'Ordered Meals',
      width: 220,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <img
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              borderRadius: '5px',
            }}
            src={params.row.image}
          />
          <Box
            height="30px"
            display="flex"
            flexDirection="column"
            justifyContent=" center"
            marginLeft="5px"
          >
            <Typography
              style={{
                fontFamily: 'Mulish',
                fontSize: '0.9rem',
                fontWeight: '700',
              }}
            >
              {params.row.food_name}
            </Typography>
            <Typography variant="caption">{params.row.category}</Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: 'quantity',
      headerName: 'Quantities',
      width: 160,
    },
    {
      field: 'totalPrice',
      headerName: 'Total Price',
      width: 160,
    },
  ];

  const rows = prepareRows();

  return (
    <div
      style={{
        width: '100%',
        borderRadius: '5px',
        background: 'white',
        padding: '10px 10px 30px',
        height: 'max-content',
      }}
    >
      <Box display="flex" alignItems="center" marginTop="30px">
        <div
          onClick={() => {
            navigate(`${from || '/'}`);
          }}
          className={root_logo_wrapper}
        >
          <BsArrowLeft />
          <Typography className={root_logo} variant="h1">
            Go Back
          </Typography>
        </div>
        <Typography className={profileheading} variant="h1">
          {item.paymentResult.id}
        </Typography>
      </Box>

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
      <Box>
        <Typography className={userdetails_heading}>
          DELIVERY ADDRESS
        </Typography>
        <Box className={userDetails}>
          <Typography>
            Name:
            <span>&nbsp; {`${item.user.firstName} ${item.user.lastName}`}</span>
          </Typography>
          <Typography>
            Email: <span> &nbsp; {`${item.user.email}`}</span>
          </Typography>
          <Typography>
            Address: <span> &nbsp; {`${item.deliveryAddress.address}`}</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
