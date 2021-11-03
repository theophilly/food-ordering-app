import React from 'react';
import Lottie from 'react-lottie';
import { AiOutlineReload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button, Box, makeStyles } from '@material-ui/core';

import notfound from '../utils/4339-not-found.json';

const useStyles = makeStyles((theme) => ({
  root2: {
    padding: '20px calc((100vw - 1100px) / 2)',
    height: '58.2vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 400px)': {
      height: '60vh  !important',
      width: '100%  !important',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '370px',
    width: '400px ',
    '@media (max-width: 400px)': {
      height: '230px  !important',
      width: '220px  !important',
    },
  },
}));

export default function NotFound({
  animationData = notfound,
  text = 'Go Home',
  path = '/',
}) {
  const { root, root2 } = useStyles(location);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box className={root2}>
      <Box className={root}>
        <Lottie options={defaultOptions} />

        <Box mt="4">
          <Button
            variant="contained"
            startIcon={<AiOutlineReload />}
            color="secondary"
            component={Link}
            to={path}
            disableElevation
            style={{ marginTop: '20px' }}
          >
            {text}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
