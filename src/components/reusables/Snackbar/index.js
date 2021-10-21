import React from 'react';
import {
  Typography,
  makeStyles,
  Button,
  Snackbar,
  OutlinedInput,
  Grid,
  Box,
} from '@material-ui/core';
import { BsArrowLeft } from 'react-icons/bs';
import Alert from '@mui/material/Alert';

export default function index({ alertContent, open, handleClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={alertContent['type']}
        sx={{ width: '100%' }}
      >
        {alertContent['content']}
      </Alert>
    </Snackbar>
  );
}
