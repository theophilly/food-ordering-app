import * as axios from 'axios';
import getCookie from './getCookie.js';

class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    // this.api_url = 'http://localhost:5000';
    this.api_url = process.env.REACT_APP_API_ENDPOINT;
  }

  init = () => {
    this.api_token = getCookie(window.store.getState().authReducer.token);

    let headers = {
      Accept: 'application/json',
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  //get users list
  getUserList = (params) => {
    return this.init().get('/users', { params: params });
  };

  //add new user
  addNewUser = (data) => {
    return this.init().post('/users', data);
  };
  //user sign In
  signIn = (data) => {
    return this.init().post('/signin', data);
  };
  //user sign In
  signUp = (data) => {
    return this.init().post('/signup', data);
  };
  //user update
  update = (data) => {
    return this.init().post('/updateuser', data);
  };
  //user password
  updatepassword = (data) => {
    return this.init().post('/updatepassword', data);
  };
  // fetch all meals
  fetchmeals = () => {
    return this.init().get('/products');
  };
  // add order
  addorder = (data) => {
    return this.init().post('/orders', data);
  };
  // get user orders
  getuserorders = () => {
    return this.init().get('/orders/myorders');
  };
}

export default new Api();
