import * as actionTypes from '../actionTypes/postActionTypes';
import axios from '../../helpers/axios';
import newAxios from 'axios';

export const createAdvice = (advice) => {
  let token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return async (dispatch) => {
    let posts = null;
    try {
      posts = await axios.post('/api/advice/create-advice', { ...advice });
      if (posts) {
        dispatch({
          type: actionTypes.ON_FETCH_SUCCESS,
          payload: {
            posts: posts.data.allAdvices,
          },
        });
      }
    } catch (error) {}
  };
};

export const updateAdvice = (advice) => {
  let token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return async (dispatch) => {
    let post = null;
    try {
      post = await axios.put(`/api/advice/update/${advice._id}`, { ...advice });
    } catch (error) {
      console.log(error.response.data.message);
    }

    if (post) {
      await dispatch({
        type: actionTypes.ON_FETCH_SUCCESS,
        payload: {
          posts: post.data.allAdvices,
        },
      });
    }
  };
};

export const deleteAdvice = (_id) => {
  let token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_BEGIN });
    let post;
    try {
      post = await axios.delete(`/api/advice/delete/${_id}`);
    } catch (error) {}

    if (post) {
      await dispatch({
        type: actionTypes.ON_FETCH_SUCCESS,
        payload: {
          posts: post.data.allAdvices,
        },
      });
    }
  };
};

export const getAllAdvice = () => {
  return async (dispatch) => {
    let post = null;
    try {
      post = await newAxios.get('/api/advice/get-all-advice');
      if (post) {
        dispatch({
          type: actionTypes.ON_FETCH_SUCCESS,
          payload: {
            posts: post.data.allAdvices,
          },
        });
      }
    } catch (error) {}
  };
};
export const sendMail = (mail) => {
  let post;
  return async (dispatch) => {
    try {
      post = await axios.post('/api/receivemail', mail);

      if (post.status === 200) {
        dispatch({
          type: actionTypes.MAIL_SUCCESS,
          payload: {
            successMessage: post.data.message,
          },
        });
      } else {
        dispatch({
          type: actionTypes.MAIL_ERROR,
          payload: {
            error: 'something went wrong',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.MAIL_ERROR,
        payload: {
          error: 'something went wrong',
        },
      });
    }
  };
};
