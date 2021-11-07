import * as React from 'react';
import {
  makeStyles,
  Typography,
  Dialog,
  DialogContent,
  Radio,
  FormControlLabel,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { useDispatch, useSelector } from 'react-redux';

import SingleFoodItem from './SingleFoodItem';
import menudata2 from '../../utils/menudata2';
import CartItem from './CartItem';
import Snackbar from '../reusables/Snackbar';
import { getAllMeals } from '../../store/actions/productActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '200vh',

    'fontFamily': 'inter, sans-serif',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      '& $menu_section': {
        flex: 1,
        marginTop: '10px',
        width: '100%',
        alignItems: 'center',
        height: 'auto',
        padding: '0px',

        '& h1': {
          // color: theme.palette.lightdark3,
          display: 'none',
        },
        '& ul': {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginBottom: '0px',

          '& li': {
            marginTop: '0px',
            marginLeft: '25px',
            paddingTop: '10px',
            fontFamily: 'Mulish',
            color: 'inherit',
            fontSize: '1rem',
            cursor: 'pointer',
          },
        },
      },
      '& $cart': {
        flex: 1,
        width: '100%',
      },
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
    '@media (max-width: 900px)': {
      border: '1px solid #ebebeb',
      marginTop: '20px',
    },

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
  submitbutton_section: {
    margin: '40px 0',

    '& :nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& > :nth-child(2)': {
      height: '1px',
      margin: '10px 0',
    },
    '& :nth-child(3)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& :nth-child(4)': {
      width: '100%',
      backgroundColor: theme.palette.green,
      color: 'white',
      padding: '15px 0',
      border: 'none',
      margin: '20px 0px',
      cursor: 'pointer',
    },
  },
  Sub_total: {
    color: theme.palette.lightdark3,
    fontSize: '.9rem',
  },
  Sub_total_value: {
    color: theme.palette.lightdark3,
    fontSize: '.9rem',
  },
  amount_payable: {
    fontSize: '.9rem',
    fontWeight: '600',
  },
  amount_payable_value: {
    fontSize: '.9rem',
    fontWeight: '600',
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
    '@media (max-width: 600px)': {
      width: 'auto',
      padding: '10px',
      '& $modal_quantity': {
        display: 'none',
      },
      '& $items_button': {
        marginLeft: '0px',
      },
    },

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
  modal_quantity: {},
  backDrop: {
    background: 'rgba(0,0,0,0.9)',
  },
}));

export default function Foodlist() {
  // hooks
  const dispatch = useDispatch();
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const meals = useSelector((state) => state.productReducer.products);
  const [allMeals, setAllMeals] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState({
    price: 0,
    totalPrice: 0,
    quantity: 1,
  });
  React.useEffect(() => {
    if (meals.length < 1) {
      (async function () {
        await dispatch(getAllMeals());
      })();
    }
  }, [meals]);
  const theme = useTheme();
  const inputEl = React.useRef('');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [alertContent, setAlertContent] = React.useState({
    type: 'error',
    content: '',
  });
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setAllMeals(meals);
  }, []);

  const handleClick = () => {
    setShow(true);
  };

  const handleCancel = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShow(false);
  };

  //  control modal open
  const openModal = (item) => {
    handleClickOpen();
    setActiveItem({ ...item, totalPrice: item.price, quantity: 1 });
  };

  // control search
  const searchHandler = () => {
    if (inputEl.current.value !== '') {
      const newAllmeals = meals.filter((currentMeal) => {
        return Object.values(currentMeal)
          .join(' ')
          .toLowerCase()
          .includes(inputEl.current.value.toLowerCase());
      });
      setAllMeals(newAllmeals);
    } else {
      setAllMeals(meals);
    }
  };

  //control cart quantities
  const controlCartQuantities = (type) => {
    if (type === 'INC') {
      if (activeItem.quantity != 5) {
        setActiveItem({
          ...activeItem,
          totalPrice: activeItem.totalPrice + activeItem.price,
          quantity: activeItem.quantity + 1,
        });
      }
    } else {
      if (activeItem.quantity > 1) {
        setActiveItem({
          ...activeItem,
          totalPrice: activeItem.totalPrice - activeItem.price,
          quantity: activeItem.quantity - 1,
        });
      }
    }
  };

  //handle modal submit
  const handleModalSubmit = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { product: activeItem } });
    setOpen(false);
  };

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
    modal_quantity,
    Sub_total,
    Sub_total_value,
    amount_payable,
    amount_payable_value,
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
    submitbutton_section,
  } = useStyles();
  return (
    <div className={root}>
      <Snackbar
        alertContent={alertContent}
        open={show}
        handleClose={handleCancel}
      />
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
          <input
            ref={inputEl}
            onChange={searchHandler}
            placeholder="Search For Dishes"
          />
        </div>
        {/* meals section */}
        <div id="meals" className={mealsGroup}>
          <div className={mealsGroup_heading}>
            <Typography variant="h1">Meals</Typography>
            <Typography variant="h1">
              {allMeals.filter((item) => item.category === 'meals').length}
              &nbsp;item(s)
            </Typography>
          </div>
          {allMeals
            .filter((item) => item.category === 'meals')
            .map((item, index) => (
              <SingleFoodItem
                key={index}
                showToast={handleClick}
                setClickData={setAlertContent}
                item={item}
                onAdd={openModal}
              />
            ))}
        </div>
        {/* swallow section */}
        <div id="swallow" className={mealsGroup}>
          <div className={mealsGroup_heading}>
            <Typography variant="h1">Swallow</Typography>
            <Typography variant="h1">
              {allMeals.filter((item) => item.category === 'swallow').length}
              &nbsp;item(s)
            </Typography>
          </div>
          {allMeals
            .filter((item) => item.category === 'swallow')
            .map((item, index) => (
              <SingleFoodItem
                key={index}
                showToast={handleClick}
                setClickData={setAlertContent}
                item={item}
                onAdd={openModal}
              />
            ))}
        </div>
        {/* bread sections */}
        <div id="bread" className={mealsGroup}>
          <div className={mealsGroup_heading}>
            <Typography variant="h1">Bread</Typography>
            <Typography variant="h1">
              {allMeals.filter((item) => item.category === 'bread').length}
              &nbsp;item(s)
            </Typography>
          </div>
          {allMeals
            .filter((item) => item.category === 'bread')
            .map((item, index) => (
              <SingleFoodItem
                key={index}
                showToast={handleClick}
                setClickData={setAlertContent}
                item={item}
                onAdd={openModal}
              />
            ))}
        </div>
      </div>
      <div className={cart}>
        <h1>Your cart</h1>

        {totalQuantities > 0 ? (
          <>
            <div
              style={{
                maxHeight: '50vh',
                overflowY: 'auto',
                scrollbarWidth: 'thin',
              }}
            >
              {products.map((item, index) => (
                <CartItem key={index} {...item} />
              ))}
            </div>

            <div className={submitbutton_section}>
              <div>
                <Typography className={Sub_total}>Sub Total</Typography>
                <Typography className={Sub_total_value}>
                  #{totalPrice}
                </Typography>
              </div>
              <hr />
              <div>
                <Typography className={amount_payable}>
                  Amount Payable
                </Typography>
                <Typography className={amount_payable_value}>
                  #{totalPrice}
                </Typography>
              </div>
              <Button
                component={NavLink}
                to={'/checkout'}
                style={{ paddingLeft: '90px' }}
              >
                PLACE YOUR ORDER
              </Button>
              <Typography>Note: Min. Order : #2000.00</Typography>
            </div>
          </>
        ) : (
          <div className={empty_cart}>
            <img src="./empty_cart.svg" />
            <Typography>Add items to your basket</Typography>
          </div>
        )}
      </div>
      <Dialog
        // style={{ position: 'relative' }}
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
            <div
              onClick={handleClose}
              style={{ position: 'absolute', top: 20, right: 20 }}
            >
              <CancelOutlinedIcon
                style={{ color: 'red', height: '20px', width: '20px' }}
              />
            </div>
            <FormControlLabel
              value="female"
              control={<Radio checked />}
              label="Full"
            />
            <Typography>#{activeItem.price}</Typography>
          </div>
          <div>
            <div className={quantity_buttons}>
              <Typography className={modal_quantity}>Quantity</Typography>
              <div className={items_button}>
                <button onClick={() => controlCartQuantities('DEC')}>-</button>
                <Typography variant="h1">{activeItem.quantity}</Typography>
                <button onClick={() => controlCartQuantities('INC')}>+</button>
              </div>
            </div>
            <div className={price_submit}>
              <Typography>Total: #{activeItem.totalPrice} </Typography>
              <button onClick={handleModalSubmit}>SUBMIT</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
