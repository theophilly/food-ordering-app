import React from 'react';
import { Snackbar } from '@material-ui/core';
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
