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
  Button,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from '../partials/FormUI/Textfield';

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
  const {
    root,
    profileheading,
    profileheading_sub,
    descriptive_text,
    personalinfo_submit,
  } = useStyles();

  return (
    <Box>
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
              firstName: '',
              lastName: '',
              phone: '',
            }}
            onSubmit={async (values) => {
              console.log('values', values);
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required('First Name is Required'),
              lastName: Yup.string().required('Last Name is Required'),
              address: Yup.string().required('Address is Required'),
              phone: Yup.number()
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
                      <Textfield name="firstName" helpertext="First Name" />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield name="phone" helpertext="Phone Number" />
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield name="lastName" helpertext="Last Name" />
                    </Box>
                  </Grid>

                  <Grid xs={12} sm={4} item></Grid>
                  <Grid xs={12} sm={4} item>
                    <Box>
                      <Button
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
              email: '',
              password: '',
            }}
            onSubmit={async (values) => {
              console.log('values', values);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
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
                      <Textfield name="email" helpertext="Email Address" />
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
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={async (values) => {
              console.log('values', values);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Invalid email format')
                .required('Required'),
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
                      <Textfield name="email" helpertext="Email Address" />
                    </Box>
                    <Box marginRight="10px" marginTop="10px">
                      <Textfield
                        type="password"
                        name="password"
                        helpertext="Password"
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
