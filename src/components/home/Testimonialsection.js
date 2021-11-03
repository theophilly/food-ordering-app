import React, { useRef } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonial from './Testimonial';
import testimonialdata from '../../utils/testimonialdata';

const useStyles = makeStyles((theme) => ({
  testimonial_section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '50px',
  },
  testimonial_control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 70px',
    '@media (max-width: 1050px)': {
      display: 'none',
    },
  },
  testimonial_control_icon: {
    color: 'lightgray',
  },
  leaderBoard_left_h1: {
    lineHeight: '40px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginTop: '17px',
    marginBottom: '20px',
  },
  testimonial_heading: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  homemenu_explore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px 0',
  },
  newClass: {
    width: '700px',
    '@media (max-width: 750px)': {
      maxWidth: '250px',
    },
  },
}));

export default function Testimonialsection() {
  const {
    testimonial_section,
    testimonial_control,
    testimonial_control_icon,
    leaderBoard_left_h1,
    testimonial_heading,
    homemenu_explore,
    newClass,
  } = useStyles();
  const control = useRef(null);
  return (
    <div className={testimonial_section}>
      <div className={homemenu_explore}>
        <Typography className={testimonial_heading} component="h1">
          Testimonial
        </Typography>
        <Typography className={leaderBoard_left_h1} variant="h2" component="h1">
          What they saying
        </Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={testimonial_control}>
          <ArrowBackIosIcon
            onClick={() => control.current.prev()}
            className={testimonial_control_icon}
          />
        </div>
        <OwlCarousel
          autoplayHoverPause={false}
          animateOut="fadeOut"
          loop={true}
          smartSpeed={1000}
          autoPlay={true}
          ref={control}
          dots={true}
          nav={false}
          items={1}
          className={`owl-theme ${newClass}`}
          responsive={{
            0: {
              items: 1,
            },
            1000: {
              items: 1,
            },
            1276: {
              items: 1,
            },
          }}
          margin={10}
          center={true}
        >
          {testimonialdata.map((data, index) => (
            <div key={index} className="item">
              <Testimonial {...data} />
            </div>
          ))}
        </OwlCarousel>
        <div className={testimonial_control}>
          <ArrowForwardIosIcon
            onClick={() => control.current.next()}
            className={testimonial_control_icon}
          />
        </div>
      </div>
    </div>
  );
}
