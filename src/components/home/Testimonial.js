import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles((theme) => ({
  testimonial: {
    display: 'flex',
    maxWidth: '700px',
    width: 'auto',
    alignItems: 'center',
    gap: '10px',
    overflow: 'hidden',
    '@media (max-width: 750px)': {
      flexDirection: 'column',
      maxWidth: '300px',
    },
  },
  testimonial_img: {
    height: '180px !important',
    width: '200px !important',
  },
  testimonial_right: {
    width: 'auto',
  },
  testimonial_quote: {
    fontSize: '.9rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    marginBottom: '15px',
  },
  testimonial_icon: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
    marginBottom: '7px',
  },
  testimonial_name: {
    fontSize: '.9rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
  },
}));

export default function Testimonial({ review, name, location }) {
  const {
    testimonial,
    testimonial_img,
    testimonial_right,
    testimonial_quote,
    testimonial_icon,
    testimonial_name,
  } = useStyles();
  return (
    <div className={testimonial}>
      <img className={testimonial_img} src="./testimonial.png"></img>
      <div className={testimonial_right}>
        <Typography className={testimonial_quote} variant="h2" component="h1">
          {review}
        </Typography>
        <div>
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
        </div>
        <Typography className={testimonial_name} variant="h2" component="h1">
          {name}
        </Typography>
        <Typography className={testimonial_quote} variant="h2" component="h1">
          {location}
        </Typography>
      </div>
    </div>
  );
}
