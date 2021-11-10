import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  leaderBoard: {
    display: 'flex',
    paddingRight: '79px',
    paddingLeft: '118px',
    background: "url('home_bg.jpg')",
    backgroundRepeat: 'no-repeat',
    objectFit: 'contain',
    backgroundPosition: '1050px -100px',
    backgroundSize: '700px',
    height: '100vh',

    '@media (max-width: 900px)': {
      paddingLeft: '20px',
      paddingRight: '0px',
      backgroundPosition: '500px -260px',
    },
    '@media (max-width: 500px)': {
      height: 'max-content',
      paddingLeft: '20px',
      paddingRight: '0px',
      backgroundPosition: '200px 0px',
    },
  },
  leaderBoard_left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  leaderBoard_left_h1: {
    lineHeight: '50px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '2.625rem',
    fontWeight: 'bold',
    '@media (max-width: 500px)': {
      marginTop: '100px',
    },
  },
  leaderBoard_left_p: {
    fontFamily: 'Inter, sans-serif',
    marginTop: '20px',
  },
  button: {
    borderRadius: '20px',
    width: '150px',
    marginTop: '30px',
    textTransform: 'lowercase',
  },
  quicktip: {
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
    '@media (max-width: 400px)': {
      marginTop: '20px',
    },
  },
  quicktip_text: {
    fontSize: '0.9rem',
    lineHeight: '17px',
    fontFamily: 'Inter, sans-serif',
    marginLeft: '7px',
  },
  quickTip_container: {
    display: 'flex',
    gap: '20px',
    marginTop: '100px',
    flexWrap: 'wrap',
    '@media (max-width: 400px)': {
      gap: '0px',
    },
  },
}));

export default function LeaderBoard() {
  const {
    leaderBoard,
    leaderBoard_left,
    leaderBoard_left_h1,
    leaderBoard_left_p,
    button,
    quicktip,
    quicktip_text,
    left,
    quickTip_container,
  } = useStyles();
  const QuickTip = ({ Icon, quicktip_details1, quicktip_details2 }) => (
    <div className={quicktip}>
      {Icon}
      <Typography className={quicktip_text} component="p">
        {quicktip_details1}
        <br /> {quicktip_details2}
      </Typography>
    </div>
  );

  return (
    <div>
      <div className={leaderBoard}>
        <div className={leaderBoard_left}>
          <Typography
            className={leaderBoard_left_h1}
            variant="h2"
            component="h1"
          >
            Order Your Favourite <br /> Food Easily
          </Typography>
          <Typography className={leaderBoard_left_p} component="p">
            We deliver 100% organic and fresh food. You can <br /> order right
            now!
          </Typography>
          <Button
            disableElevation
            className={button}
            variant="contained"
            color="primary"
            autoCapitalize="none"
            endIcon={<ArrowRightAltIcon />}
            component={Link}
            to={'/allmeals'}
          >
            our menu
          </Button>
          <div className={quickTip_container}>
            <QuickTip
              Icon={<LocalMallIcon />}
              quicktip_details1="select your favourite food"
              quicktip_details2="and order!"
            />
            <QuickTip
              Icon={<LocationOnIcon />}
              quicktip_details1="select your receiving place"
              quicktip_details2="place"
            />
            <QuickTip
              Icon={<LocalShippingIcon />}
              quicktip_details1="Get your food within"
              quicktip_details2="01-02 hours"
            />
          </div>
        </div>
        <div className={left}></div>
      </div>
    </div>
  );
}
