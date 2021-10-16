import React from 'react';

// material-ui

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

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
}));

export default function Userorders() {
  const { root, profileheading, button, selected } = useStyles();

  return (
    <div
      style={{
        width: '100%',
        borderRadius: '5px',
        background: 'white',
        padding: '10px',
        height: 'max-content',
        //  marginRight: '30px',
      }}
    >
      <Typography>orders</Typography>
      <Box height="max-content !important">
        <DataGrid
          autoHeight={true}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}
