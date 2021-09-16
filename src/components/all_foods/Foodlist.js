import * as React from 'react';
import {
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Radio,
  FormControlLabel,
  DialogTitle,
  Backdrop,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import SearchIcon from '@material-ui/icons/Search';
import SingleFoodItem from './SingleFoodItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '200vh',

    'fontFamily': 'inter, sans-serif',
    '@media (max-width: 850px)': {
      marginRight: '15px',
    },
  },
  menu_section: {
    padding: '20px',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: 0,
    alignSelf: 'flex-start',
    flex: 2.5,
    width: '300px',
    //maxHeight: '80vh',
    // left: 0,
    '& h1': {
      // color: theme.palette.lightdark3,
      fontSize: '1.3rem',
      fontFamily: 'Mulish',
      fontWeight: 600,
    },
    '& ul': {
      listStyleType: 'none',
      textAlign: 'end',
      marginBottom: '25px',
      '& li': {
        marginTop: '25px',
        fontFamily: 'Mulish',
        color: 'inherit',
        fontSize: '1rem',
        cursor: 'pointer',
      },
    },
  },
  food_list: {
    borderLeft: '1px solid #ebebeb',
    borderRight: '1px solid #ebebeb',
    flex: 5,
    //  marginLeft: '300px',
    //  marginRight: '300px',
  },
  searchSection: {
    height: '60px',
    display: 'flex',
    borderBottom: '1px solid #ebebeb',
    alignItems: 'center',
    paddingLeft: '15px',
    position: 'sticky',
    zIndex: 999,
    background: 'white',
    top: 7,

    '& input': {
      flex: 1,
      height: '100%',
      border: 'none',
      outline: 'none',
    },
    '& input::placeholder': {
      fontSize: '.9rem',
    },
  },
  searchIcon: {
    width: '40px',
    color: theme.palette.lightdark2,
  },
  cart: {
    position: 'sticky',
    alignSelf: 'flex-start',
    top: 0,
    maxHeight: '80vh',
    flex: 2.5,
    padding: '20px',
    '& h1': {
      color: theme.palette.lightdark3,
      fontSize: '1.3rem',
      fontFamily: 'Mulish',
    },
  },
  mealsGroup: {},
  mealsGroup_heading: {
    display: 'flex',
    alignItems: 'baseline',
    padding: '15px 28px',

    '& :nth-child(1)': {
      // color: theme.palette.lightdark3,
      fontSize: '1.3rem',
      fontFamily: 'Mulish',
    },
    '& :nth-child(2)': {
      color: theme.palette.lightdark2,
      marginLeft: '20px',
      fontSize: '0.9rem',
      fontFamily: 'Mulish',
    },
  },
  empty_cart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',

    '& :nth-child(1)': {
      height: '80px',
      width: '130px',
    },
    '& :nth-child(2)': {
      color: theme.palette.lightdark2,
      marginTop: '20px',
      fontSize: '0.9rem',
      fontFamily: 'Mulish',
    },
  },
  modal_content: {
    width: '600px',

    '& > div:nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
    },
    '& > div:nth-child(2)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
    },
  },
  quantity_buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  price_submit: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      background: theme.palette.green,
      border: 'none',
      color: 'white',
      fontFamily: 'Mulish',
      padding: '10px 20px',
      marginLeft: '10px',
      cursor: 'pointer',
    },
  },
  items_button: {
    display: 'flex',
    marginLeft: '10px',

    '& button': {
      backgroundColor: theme.palette.green,
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      height: '30px',
      width: '30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& h1': {
      fontWeight: '600',
      fontSize: '1rem',
      height: '30px',
      width: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
  },
  backDrop: {
    background: 'rgba(0,0,0,0.9)',
  },
}));

export default function Foodlist() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    root,
    menu_section,
    modal_content,
    food_list,
    cart,
    searchSection,
    searchIcon,
    mealsGroup,
    mealsGroup_heading,
    empty_cart,
    items_button,
    quantity_buttons,
    price_submit,
    backDrop,
  } = useStyles();
  return (
    <div className={root}>
      <div className={menu_section}>
        <h1>Menu</h1>
        <ul>
          <Link
            activeClass="active_link"
            offset={-62}
            to="meals"
            duration={2000}
            smooth={true}
            spy={true}
          >
            <li>Meals</li>
          </Link>
          <Link
            activeClass="active_link"
            offset={-62}
            to="swallow"
            duration={2000}
            smooth={true}
            spy={true}
          >
            <li>Swallow</li>
          </Link>
          <Link
            activeClass="active_link"
            offset={-62}
            to="bread"
            duration={2000}
            smooth={true}
            spy={true}
          >
            <li>Bread</li>
          </Link>
        </ul>
        <h1>Overview</h1>
      </div>
      <div className={food_list}>
        <div className={searchSection}>
          <SearchIcon className={searchIcon} />
          <input placeholder="Search For Dishes" />
        </div>
        {/* meals section */}
        <div id="meals" className={mealsGroup}>
          <div onClick={handleClickOpen} className={mealsGroup_heading}>
            <Typography variant="h1">Meals</Typography>
            <Typography variant="h1">2 item(2)</Typography>
          </div>
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
        </div>
        {/* swallow section */}
        <div id="swallow" className={mealsGroup}>
          <div className={mealsGroup_heading}>
            <Typography variant="h1">Swallow</Typography>
            <Typography variant="h1">2 item(2)</Typography>
          </div>
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
        </div>
        {/* bread sections */}
        <div id="bread" className={mealsGroup}>
          <div className={mealsGroup_heading}>
            <Typography variant="h1">Bread</Typography>
            <Typography variant="h1">2 item(2)</Typography>
          </div>
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
          <SingleFoodItem />
        </div>
      </div>
      <div className={cart}>
        <h1>Your cart</h1>
        <div className={empty_cart}>
          <img src="./empty_cart.svg" />
          <Typography>Add items in your basket</Typography>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        BackdropProps={{
          classes: {
            root: backDrop,
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          {'Customize Your Order!'}
        </DialogTitle>
        <DialogContent className={modal_content}>
          <div>
            <FormControlLabel
              value="female"
              control={<Radio checked />}
              label="Full"
            />
            <Typography>#4000</Typography>
          </div>
          <div>
            <div className={quantity_buttons}>
              <Typography>Quantity</Typography>
              <div className={items_button}>
                <button>-</button>
                <Typography variant="h1">1</Typography>
                <button>+</button>
              </div>
            </div>
            <div className={price_submit}>
              <Typography>Total: $50.00</Typography>
              <button onClick={handleClose}>SUBMIT</button>
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
