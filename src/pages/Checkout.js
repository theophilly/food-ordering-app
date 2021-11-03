import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usePaystackPayment } from 'react-paystack';
import {
  makeStyles,
  Stepper,
  StepLabel,
  Step,
  Button,
  Typography,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  CircularProgress,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { BsArrowLeft } from 'react-icons/bs';
import * as Yup from 'yup';

import Textfield from '../components/partials/FormUI/Textfield';
import SelectWrapper from '../components/partials/FormUI/SelectWrapper';
import stateData from '../utils/stateData.json';
import RadioWrapper from '../components/partials/FormUI/RadioWrapper';
import Paymentmethod from '../components/partials/FormUI/Paymentmethod';
import Cartcheckout from '../components/reusables/Cartcheckout';
import { processOrder } from '../store/actions/orderActions';
import Snackbar from '../components/reusables/Snackbar';
import NotFound from './NotFound';
import use_avatar from '../utils/use_avatar.json';
import getCookie from '../helpers/getCookie';

let values = null;

//material ui style
const useStyles = makeStyles((theme) => ({
  checkout: {
    width: '100%',
    display: 'flex',
    paddingTop: '35px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  checkout_left: {
    flex: '0.7',
    paddingLeft: '120px',
    '@media (max-width: 900px)': {
      padding: '0 10px',
    },
  },
  checkout_right: {
    flex: '0.3',
  },
  customer_info: {
    fontWeight: '600',
    fontSize: '1.2rem',
    fontFamily: 'mulish',
    marginBottom: '20px',
  },
  shopping_cart_heading: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '50px',
    paddingLeft: '25px',
    marginBottom: '15px',
    marginTop: '20px',
    '& > :nth-child(1)': {
      fontWeight: '600',
      fontSize: '1.2rem',
      fontFamily: 'mulish',
    },
    '& > :nth-child(2)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '24px',
      width: '24px',
      borderRadius: '50%',
      background: '#0077E2',
      color: 'white',
    },
  },
  adress_box_details: {
    fontSize: '0.9rem',
    marginTop: '3px',
  },
  backsection: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '& :nth-child(1)': {
      fontSize: '1rem',
    },
    '& :nth-child(2)': {
      fontSize: '.9rem',
      marginLeft: '10px',
    },
  },
  controls: {
    marginTop: '60px',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  edit_address: {
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  submitbutton_section: {
    margin: '40px 0',
    padding: '0 25px',

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
  note: {
    fontSize: '0.9rem',
    marginTop: '10px',
  },
}));

//To control shipping go back button
let goBack;
//show Customer Details
let customer_details;

const muiTheme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#0077E2',
        },
        '&$active': {
          color: '#0077E2',
        },
      },
    },
  },
});

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export default function Checkout() {
  const {
    edit_address,
    checkout,
    checkout_left,
    checkout_right,
    shopping_cart_heading,
    customer_info,
    adress_box_details,
    submitbutton_section,
    Sub_total,
    Sub_total_value,
    amount_payable,
    amount_payable_value,
    note,
  } = useStyles();

  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cartReducer
  );
  const { user, authenticated, token } = useSelector(
    (state) => state.authReducer
  );

  const [alertContent, setAlertContent] = React.useState({
    type: 'error',
    content: '',
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //reorder cart peoduct arrays
  const reorderProduct = (products) => {
    let newH = [];
    products.map((item) => {
      newH.push({
        title: item.title,
        quantity: item.quantity,
        image_path: item.image_path,
        totalPrice: item.totalPrice,
        product: item._id,
        category: item.category,
      });
    });
    return newH;
  };

  const dispatch = useDispatch();

  //check login status
  const cookie = getCookie(token);

  const memoizedResult = React.useMemo(() => {
    if (!cookie) {
      dispatch({ type: 'SIGN_OUT' });
      console.log('here');
    }
  }, [cookie]);

  //paystack hook
  const initializePayment = usePaystackPayment({
    reference: new Date().getTime().toString(),
    email: 'user@example.com',
    amount: totalPrice,
    publicKey: 'pk_test_9667838c0fa5f162be811a2e81b1ec5a9394ee74',
  });

  //onSuccess Clone
  const onSuccessWrapper = (reference) => {
    onSuccess(reference);
  };

  // you can call this function anything
  const onSuccess = async (reference) => {
    const order = {
      orderItems: reorderProduct([...products]),
      deliveryAddress: {
        address: values.address,
        city: values.city,
        postalCode: values.postalCode,
      },
      paymentMethod: values.paymentMethod,
      paymentResult: {
        id: reference.reference,
        status: reference.status,
      },
      deliveryPrice: values.deliveryMethod === 'paid' ? 1000 : 0,
      totalPrice:
        values.deliveryMethod === 'paid' ? totalPrice + 1000 : totalPrice,
    };

    await dispatch(processOrder(order));

    if (window.store.getState().orderReducer.status === true) {
      await setAlertContent({
        type: 'success',
        content: window.store.getState().orderReducer.message,
      });
      handleClick();
    } else {
      await setAlertContent({
        type: 'error',
        content: window.store.getState().orderReducer.message,
      });
      handleClick();
    }
    setTimeout(() => {
      dispatch({ type: 'EMPTY_ORDER' });
      dispatch({ type: 'EMPTY_CART' });
    }, 3000);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
  };

  const [customer_detail, set_Customer_detail] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    city: '',
    phone: '',
    state: '',
  });

  useEffect(() => {
    customer_details = set_Customer_detail;
  }, []);

  if (totalQuantities === 0) {
    return <Navigate to="/allmeals" />;
  }

  return (
    <div className={checkout}>
      {authenticated ? (
        <div className={checkout_left}>
          <FormikStepper
            initialValues={{
              firstName: user.firstName,
              lastName: user.lastName,
              address: '',
              postalCode: '',
              city: '',
              phone: '',
              state: '',
              deliveryMethod: '',
              paymentMethod: '',
            }}
            onSubmit={async (formvalues) => {
              await sleep(3000);

              const cookie = getCookie(token);
              if (!cookie) {
                await setAlertContent({
                  type: 'error',
                  content: 'session expired',
                });
                handleClick();
                dispatch({ type: 'SIGN_OUT' });
                return;
              }

              values = formvalues;
              initializePayment(onSuccessWrapper, onClose);
            }}
          >
            <FormikStep
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required('First Name is Required'),
                lastName: Yup.string().required('Last Name is Required'),
                address: Yup.string().required('Address is Required'),
                //  postalCode: Yup.string().required('postalCode is Required'),
                city: Yup.string().required('city is Required'),
                postalCode: Yup.number()
                  .integer()
                  .typeError('Please enter a valid postal number')
                  .required('Postal code is Required'),
                phone: Yup.number()
                  .integer()
                  .typeError('Please enter a valid phone number')
                  .required('Phone is Required'),
                state: Yup.string().required('state is required'),
              })}
              label="Customer"
            >
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <Typography className={customer_info}>
                    Customer Information
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield
                    disabled={!!user.firstName}
                    name="firstName"
                    helpertext="First Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield
                    disabled={!!user.lastName}
                    name="lastName"
                    helpertext="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield name="address" helpertext="Address" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SelectWrapper
                    name="state"
                    helpertext="State"
                    options={stateData}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield name="city" helpertext="City" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield name="postalCode" helpertext="Postal code" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Textfield name="phone" helpertext="Phone" />
                </Grid>
              </Grid>
            </FormikStep>
            <FormikStep
              validationSchema={Yup.object().shape({
                deliveryMethod: Yup.string().required(
                  'You must select a delivery method'
                ),
              })}
              label="Shipping"
            >
              <Grid container>
                <Grid xs={12} item>
                  <Typography className={customer_info}>
                    Shipping Information
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Box
                    width="max-content"
                    padding="16px"
                    border="1px solid #C4C4C4"
                    borderRadius="10px"
                  >
                    <Typography className={adress_box_details}>
                      {customer_detail.firstName} {customer_detail.lastName}
                    </Typography>
                    <Typography className={adress_box_details}>
                      {customer_detail.address}
                    </Typography>
                    <Typography className={adress_box_details}>
                      {customer_detail.city}
                    </Typography>
                    <Typography className={adress_box_details}>
                      {customer_detail.state}
                    </Typography>
                    <Typography className={adress_box_details}>
                      Tel: {customer_detail.phone}
                    </Typography>
                    <Typography
                      onClick={() => goBack((s) => s - 1)}
                      className={edit_address}
                      color="secondary"
                    >
                      edit address
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} item>
                  <Box marginTop="20px">
                    <Typography className={customer_info}>
                      Shipping Method
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} item>
                  <RadioWrapper name="deliveryMethod" />
                </Grid>
              </Grid>
            </FormikStep>
            <FormikStep
              validationSchema={Yup.object().shape({
                paymentMethod: Yup.string().required(
                  'You must select a payment method'
                ),
              })}
              label="Payment"
            >
              <Grid container>
                <Grid xs={12} item>
                  <Typography className={customer_info}>
                    Payment Selection
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Paymentmethod name="paymentMethod" />
                </Grid>
              </Grid>
            </FormikStep>
          </FormikStepper>
        </div>
      ) : (
        <div className={checkout_left}>
          <NotFound path="/login" text="Login" animationData={use_avatar} />
        </div>
      )}

      <div className={checkout_right}>
        <div className={shopping_cart_heading}>
          <Typography>Shopping Cart</Typography>
          <div>
            <Typography>{totalQuantities}</Typography>
          </div>
        </div>
        {products.map((item, index) => (
          <Cartcheckout key={index} {...item} />
        ))}

        <div className={submitbutton_section}>
          <div>
            <Typography className={Sub_total}>Sub Total</Typography>
            <Typography className={Sub_total_value}>#{totalPrice}</Typography>
          </div>
          <hr />
          <div>
            <Typography className={amount_payable}>Amount Payable</Typography>
            <Typography className={amount_payable_value}>
              #{totalPrice}
            </Typography>
          </div>

          <Typography className={note}>Note: Min. Order : #2000.00</Typography>
        </div>
      </div>

      <Snackbar
        alertContent={alertContent}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export function FormikStep({ children }) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
  const { backsection, controls } = useStyles();
  let history = useNavigate();
  const [step, setStep] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    goBack = setStep;
  }, []);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          if (step === 0) {
            customer_details({ ...values });
          }
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <ThemeProvider theme={muiTheme}>
            <Stepper color="secondary" activeStep={step}>
              {childrenArray.map((child, index) => (
                <Step
                  color="secondary"
                  key={child.props.label}
                  completed={step > index || completed}
                >
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </ThemeProvider>

          {currentChild}

          <Grid className={controls} container spacing={2}>
            {step === 0 ? (
              <Grid
                className={backsection}
                onClick={() => history('/allmeals')}
                item
              >
                <BsArrowLeft />
                <Typography>Order page</Typography>
              </Grid>
            ) : null}
            {step === 1 ? (
              <Grid
                className={backsection}
                onClick={() => setStep((s) => s - 1)}
                item
              >
                <BsArrowLeft />
                <Typography>Customer Info</Typography>
              </Grid>
            ) : null}
            {step === 2 ? (
              <Grid
                className={backsection}
                onClick={isSubmitting ? null : () => setStep((s) => s - 1)}
                item
              >
                <BsArrowLeft />
                <Typography>Shipping Info</Typography>
              </Grid>
            ) : null}
            {/* section */}
            {step === 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  Continue to shipping
                </Button>
              </Grid>
            ) : null}
            {step === 1 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  Continue to Billing
                </Button>
              </Grid>
            ) : null}
            {step === 2 ? (
              <Grid item>
                <Button
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="secondary"
                  disableElevation
                  type="submit"
                >
                  {isSubmitting
                    ? 'Submitting'
                    : isLastStep()
                    ? 'Complete Order'
                    : 'Next'}
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
