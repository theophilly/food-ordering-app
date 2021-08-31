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

export default function Testimonial() {
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
          " Thank you for your food its so fresh and deliciousand it takes the
          work of guesswork out of m busy life when it comes to eating, Awesome
          food is AWESOME! You have a customer for Life. "
        </Typography>
        <div>
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
          <StarIcon className={testimonial_icon} />
        </div>
        <Typography className={testimonial_name} variant="h2" component="h1">
          Adeyemi Kolade
        </Typography>
        <Typography className={testimonial_quote} variant="h2" component="h1">
          Lagos
        </Typography>
      </div>
    </div>
  );
}
