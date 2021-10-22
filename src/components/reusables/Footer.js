import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, makeStyles, Paper } from '@material-ui/core';
import { FcPodiumWithAudience } from 'react-icons/fc';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '40px',
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
      padding: '10px !important',

      '& $root_left': {
        '& > :nth-child(1)': {
          justifyContent: 'center',
        },
        '& > :nth-child(2)': {
          width: '100%',
        },
      },
      '& $root_right': {
        '& > :nth-child(1)': {
          marginTop: '20px',
        },
        '& > :nth-child(2)': {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.3rem',
          fontWeight: '500',
          marginTop: '0px',
        },
      },
    },
  },
  root_left: {
    flex: '0.6',
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
    },
  },
  root_right: {
    '& > :nth-child(1)': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.3rem',
      fontWeight: '500',
      marginTop: '20px',
    },
    '& > :nth-child(2)': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.3rem',
      fontWeight: '500',
      marginTop: '0px',
    },
  },
}));

export default function Footer() {
  const { root, root_left, root_right, recommendation_link } = useStyles();
  return (
    <Paper
      className={root}
      padding={{ base: '10px', xl: '20px calc((100vw - 1100px) / 2)' }}
    >
      <Box className={root_left}>
        <Box
          justifyContent={{ 'base': 'center', 'md': 'flex-start' }}
          className="logo"
        >
          <FcPodiumWithAudience size={35} /> <span>Theomeals</span>
        </Box>
        <Typography width={{ 'sm': '100%', 'md': '70%' }}>
          Thank you for taking time to check this app. I do hope you are having
          fun accessing it
        </Typography>
      </Box>
      <Box className={root_right}>
        <Typography mt={{ base: '20px', md: '0px' }}>Links</Typography>
        <Link to="/">
          <Typography
            fontWeight={{ base: 'normal', sm: 'normal' }}
            mt={{ base: '10px', md: '20px' }}
            _hover={{ color: '#3182CE' }}
          >
            Home
          </Typography>
        </Link>
        <Link to="/about">
          <Typography
            _hover={{ color: '#3182CE' }}
            fontWeight={{ base: 'normal', sm: 'normal' }}
          >
            About
          </Typography>
        </Link>
      </Box>
    </Paper>
  );
}
