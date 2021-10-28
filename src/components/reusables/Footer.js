import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, makeStyles, Paper } from '@material-ui/core';
import { FcPodiumWithAudience } from 'react-icons/fc';

const useStyles = makeStyles({
  root: (props) => ({
    display: props.pathname === '/login' ? 'none' : 'flex',
    minHeight: '200px',
    alignItems: 'center',
    backgroundPosition: 'right',
    backgroundImage:
      'url(https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-yellow-blob-shape.svg)',
    objectFit: 'right right',
    backgroundRepeat: 'no-repeat',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px calc((100vw - 1100px) / 2)',

    '@media screen and (max-width: 759px) ': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '@media screen and (max-width: 30em)': {
      padding: '30px 10px !important',
      marginTop: '40px',
    },
  }),
  root_left: {
    flex: '0.6',
    //  border: '1px solid red',

    '& > :nth-child(1)': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& > :nth-child(2)': {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1.3rem',
        fontWeight: '500',
        marginTop: '0px',
      },
    },
    '& > :nth-child(2)': {
      marginTop: '20px',
      width: '70%',
      '@media screen and (max-width: 30em)': {
        marginTop: '5px',
      },
    },
    '@media screen and (max-width: 30em)': {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
    },
  },
  root_right: {
    '& > :nth-child(1)': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.3rem',
      fontWeight: '500',
      marginTop: '0px',
      '@media screen and (max-width: 30em)': {
        marginTop: '25px',
      },
    },
  },
});

export default function Footer() {
  const location = useLocation();
  const { root, root_left, root_right, recommendation_link } = useStyles(
    location
  );
  return (
    <Paper className={root}>
      <Box className={root_left}>
        <Box>
          <FcPodiumWithAudience size={35} /> <span>Theomeals</span>
        </Box>
        <Typography width={{ 'sm': '100%', 'md': '70%' }}>
          Thank you for trusting us with your meals. We do hope you enjoy our
          dishes
        </Typography>
      </Box>
      <Box className={root_right}>
        <Typography>Links</Typography>
        <Box display="flex" flexDirection="column">
          <Typography
            component={Link}
            to="/"
            style={{
              marginTop: '10px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Home
          </Typography>

          <a
            href="https://myreactprofile.netlify.app/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              marginTop: '5px',
            }}
            target="_blank"
          >
            About
          </a>
        </Box>
      </Box>
    </Paper>
  );
}
