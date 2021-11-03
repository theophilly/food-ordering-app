import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui

import {
  makeStyles,
  Box,
  Divider,
  CircularProgress,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../partials/FormUI/Textfield';
import { updateUser, updatePassword } from '../../store/actions/authActions';

import Snackbar from '../reusables/Snackbar';
import getCookie from '../../helpers/getCookie';

// style const
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    background: 'white',
    minHeight: '90vh',
    padding: '40px 30px',
    overflow: 'hidden',

    '@media (max-width: 900px)': {
      padding: '20px',
    },
  },
  profileheading: {
    fontWeight: '700',
    fontSize: '1.4rem',
    fontFamily: 'mulish',
    marginBottom: '25px',
  },
  profileheading_sub: {
    fontWeight: '600',
    fontSize: '1rem',
    fontFamily: 'mulish',
    marginBottom: '13px',
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
  descriptive_text: {
    fontSize: '.9rem',
    color: 'gray',
  },
  personalinfo_submit: {
    width: '100px',
    marginTop: '15px',
  },
}));

export default function Mydetails() {
  const [alertContent, setAlertContent] = React.useState({
    type: 'error',
    content: '',
  });

  const [open, setOpen] = React.useState(false);
  const auth = useSelector((state) => state.authReducer);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();
  const {
    root,
    profileheading,
    profileheading_sub,
    descriptive_text,
    personalinfo_submit,
  } = useStyles();

  return (
    <Box>
      <Snackbar
        alertContent={alertContent}
        open={open}
        handleClose={handleClose}
      />
      <Box className={root}>
        <Typography className={profileheading} variant="h1">
          My Details
        </Typography>

        {/* first */}
        <Box>
          <Typography className={profileheading_sub} variant="h1">
            Personal Information
          </Typography>
          <Divider />

          <Formik
            initialValues={{
              updateFirstName: auth.user.firstName,
              updateLastName: auth.user.lastName,
              updatePhone: auth.user.phone,
            }}
            onSubmit={async (values) => {
              const cookie = getCookie(auth.token);

              if (!cookie) {
                await setAlertContent({
                  type: 'error',
                  content: 'session expired',
                });
                handleClick();
                await setTimeout(() => {
                  dispatch({ type: 'SIGN_OUT' });
                }, 3000);
                return;
              }

              await dispatch(
                updateUser({
                  firstName: values.updateFirstName,
                  lastName: values.updateLastName,
                  phone: values.updatePhone,
                })
              );
              if (window.store.getState().authReducer.updated === true) {
                await setAlertContent({
                  type: 'success',
                  content: 'You profile has been successfully updated',
                });
                handleClick();
                dispatch({ type: 'ON_UPDATE_SUCCESS' });
              } else {
                await setAlertContent({
                  type: 'error',
                  content: window.store.getState().authReducer.error,
                });
                handleClick();
              }
            }}
            validationSchema={Yup.object().shape({
              updateFirstName: Yup.string().required('First Name is Required'),
              updateLastName: Yup.string().required('Last Name is Required'),
              updatePhone: Yup.number()
                .integer()
                .typeError('Please enter a valid phone number')
                .required('Phone is Required'),
            })}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <Grid container>
                  <Grid
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '0px',
                      paddingTop: '5px',
                    }}
                    xs={12}
                    sm={4}
                    item
                  >
                    <Typography className={descriptive_text}>
                      Assertively utilize adaptive customer service for future
                      proof platform. completely drive optimal markets
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        name="updateFirstName"
                        helpertext="First Name"
                      />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield name="updatePhone" helpertext="Phone Number" />
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield name="updateLastName" helpertext="Last Name" />
                    </Box>
                  </Grid>

                  <Grid xs={12} sm={4} item></Grid>
                  <Grid xs={12} sm={4} item>
                    <Box>
                      <Button
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress color="primary" size="1rem" />
                          ) : null
                        }
                        color="secondary"
                        className={personalinfo_submit}
                        type="submit"
                        variant="contained"
                      >
                        save
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item></Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>

        {/* second */}
        <Box marginTop="60px">
          <Typography className={profileheading_sub} variant="h1">
            Email Address
          </Typography>
          <Divider />

          <Formik
            initialValues={{
              email: auth.user.email,
              newEmail: '',
              password: '',
            }}
            onSubmit={async (values) => {
              const cookie = getCookie(auth.token);

              if (!cookie) {
                await setAlertContent({
                  type: 'error',
                  content: 'session expired',
                });
                handleClick();
                await setTimeout(() => {
                  dispatch({ type: 'SIGN_OUT' });
                }, 3000);
                return;
              }

              if (values.newEmail === auth.user.email) {
                await setAlertContent({
                  type: 'error',
                  content: 'This is still your email, provide a new one',
                });
                handleClick();
                return;
              }

              await dispatch(
                updateUser({
                  email: values.newEmail,
                  password: values.password,
                })
              );
              if (window.store.getState().authReducer.updated === true) {
                await setAlertContent({
                  type: 'success',
                  content: 'Your email has been successfully updated',
                });
                handleClick();
                dispatch({ type: 'ON_UPDATE_SUCCESS' });
              } else {
                await setAlertContent({
                  type: 'error',
                  content: window.store.getState().authReducer.error,
                });
                handleClick();
              }
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Invalid email format')
                .required('Required'),
              newEmail: Yup.string()
                .email('Invalid email format')
                .required('Required'),
              password: Yup.string()
                .min(6, 'password must be atleast 6 characters')
                .required('Password is required'),
            })}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <Grid container>
                  <Grid
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '0px',
                      paddingTop: '5px',
                    }}
                    xs={12}
                    sm={4}
                    item
                  >
                    <Typography className={descriptive_text}>
                      Assertively utilize adaptive customer service for future
                      proof platform. completely drive optimal markets
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        name="email"
                        disabled={true}
                        helpertext="Current Email Address"
                      />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        name="newEmail"
                        helpertext="New Email Address"
                      />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        type="password"
                        name="password"
                        helpertext="Password"
                      />
                    </Box>
                    <Box>
                      <Button
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress color="primary" size="1rem" />
                          ) : null
                        }
                        color="secondary"
                        className={personalinfo_submit}
                        type="submit"
                        variant="contained"
                      >
                        save
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item></Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>

        {/* third */}
        <Box marginTop="60px">
          <Typography className={profileheading_sub} variant="h1">
            Password
          </Typography>
          <Divider />

          <Formik
            initialValues={{
              oldPassword: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={async (values) => {
              const cookie = getCookie(auth.token);

              if (!cookie) {
                await setAlertContent({
                  type: 'error',
                  content: 'session expired',
                });
                handleClick();
                await setTimeout(() => {
                  dispatch({ type: 'SIGN_OUT' });
                }, 3000);
                return;
              }

              await dispatch(
                updatePassword({
                  password: values.password,
                  oldPassword: values.oldPassword,
                })
              );
              if (window.store.getState().authReducer.updated === true) {
                await setAlertContent({
                  type: 'success',
                  content: 'You password has been successfully updated',
                });
                handleClick();
                dispatch({ type: 'ON_UPDATE_SUCCESS' });
              } else {
                await setAlertContent({
                  type: 'error',
                  content: window.store.getState().authReducer.error,
                });
                handleClick();
              }
            }}
            validationSchema={Yup.object().shape({
              oldPassword: Yup.string()
                .min(6, 'password must be atleast 6 characters')
                .required('Password is required'),
              password: Yup.string()
                .min(6, 'password must be atleast 6 characters')
                .required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'password must match')
                .required('Please confirm password 😱'),
            })}
          >
            {({ isSubmitting }) => (
              <Form autoComplete="off">
                <Grid container>
                  <Grid
                    style={{
                      paddingRight: '20px',
                      paddingLeft: '0px',
                      paddingTop: '5px',
                    }}
                    xs={12}
                    sm={4}
                    item
                  >
                    <Typography className={descriptive_text}>
                      Assertively utilize adaptive customer service for future
                      proof platform. completely drive optimal markets
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        type="password"
                        name="oldPassword"
                        helpertext="Current Password"
                      />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        type="password"
                        name="password"
                        helpertext="New Password"
                      />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        type="password"
                        name="confirmPassword"
                        helpertext="Confirm Password"
                      />
                    </Box>
                    <Box>
                      <Button
                        startIcon={
                          isSubmitting ? (
                            <CircularProgress color="primary" size="1rem" />
                          ) : null
                        }
                        color="secondary"
                        className={personalinfo_submit}
                        type="submit"
                        variant="contained"
                      >
                        save
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item></Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}
