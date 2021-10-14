import React from 'react';
import {
  Typography,
  makeStyles,
  Button,
  OutlinedInput,
} from '@material-ui/core';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    display: 'flex',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  root_logo: {
    fontSize: '1.2rem',
    fontWeight: '500',
    fontFamily: 'Mulish',
    marginLeft: '5px',
  },
  root_left: {
    minWidth: '40%',
    minHeight: '100%',
    padding: '50px 100px',
  },
  root_right: {
    minWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //  border: '1px solid red',
    minHeight: '100vh',
    background: theme.palette.green,
    '& :nth-child(1)': {
      height: '60%',
      width: '70%',
    },
    '& :nth-child(2)': {
      fontFamily: 'Mulish',
      fontSize: '2rem',
      width: '50%',
      color: 'white',
      // marginBottom: '10px',
    },
  },
  root_left_upper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '100px',
    '& > :nth-child(2)': {
      textTransform: 'capitalize',
      height: '30px',
      color: theme.palette.secondary.main,
    },
  },
  root_left_lower: {
    '& :nth-child(1)': {
      fontFamily: 'Mulish',
      fontSize: '.9rem',
    },
    '& > :nth-child(2)': {
      fontFamily: 'Mulish',
      fontSize: '1.8rem',
      fontWeight: '700',
    },
  },
  log_input: {
    height: '43px',
    width: '100%',
    marginTop: '10px',
  },
  login_button: {
    width: '100%',
    marginTop: '20px',
    background: theme.palette.green,
    color: 'white',
    '& :hover': {
      color: 'black',
    },
  },
  sign_up_google: {
    cursor: 'pointer',
    display: 'flex',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '5px',
    padding: '10px 10px',
    justifyContent: 'center',
    marginTop: '10px',
    '& > :nth-child(2)': {
      fontFamily: 'Mulish',
      fontSize: '1rem',
      marginLeft: '7px',
      color: theme.palette.secondary.main,
    },
  },
  root_logo_wrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));

export default function Login() {
  const {
    root,
    root_logo,
    root_left,
    root_right,
    root_left_upper,
    root_left_lower,
    log_input,
    login_button,
    sign_up_google,
    root_logo_wrapper,
  } = useStyles();
  let history = useNavigate();
  let { path } = useParams();
  return (
    <div className={root}>
      <div className={root_left}>
        <div className={root_left_upper}>
          <div
            onClick={() => {
              history.replace(`/${path}`);
            }}
            className={root_logo_wrapper}
          >
            <BsArrowLeft />
            <Typography className={root_logo} variant="h1">
              Go Back
            </Typography>
          </div>

          <Button variant="outlined">Sign In</Button>
        </div>
        <div className={root_left_lower}>
          <Typography>get your food</Typography>
          <Typography variant="h1" component="h1">
            Create an Account
          </Typography>
          <OutlinedInput
            style={{ marginTop: '20px' }}
            className={log_input}
            color="secondary"
            placeholder="enter your username"
          />
          <OutlinedInput
            className={log_input}
            color="secondary"
            placeholder="enter your password"
          />
          <OutlinedInput
            className={log_input}
            color="secondary"
            placeholder="enter your password"
          />
          <Button className={login_button} disableElevation variant="contained">
            Sign Up
          </Button>
          <div className={sign_up_google}>
            <img src="./social-google.svg" />
            <Typography>Sign up with Google</Typography>
          </div>
          {/* <div>
            <Typography>Already have an account?</Typography>
            <Typography>Sign in</Typography>
          </div> */}
        </div>
      </div>
      <div className={root_right}>
        <img src="./macaroni-1469.png" />
        <Typography variant="h1">
          With a free Account getting food has never been easier
        </Typography>
      </div>
    </div>
  );
}
