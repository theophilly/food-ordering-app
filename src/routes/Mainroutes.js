import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Userprofile from '../pages/Userprofile';
import Mydetails from '../components/user_profile/Mydetails';
import Useraddress from '../components/user_profile/Useraddress';
import Userorders from '../components/user_profile/Userorders';
import Home from '../pages/Home';
import Allfoods from '../pages/Allfoods';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/allmeals',
    element: <Allfoods />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/login',
    element: isLoggedIn ? <Navigate to="/profile" /> : <Login />,
  },
  {
    path: '/signout',
    element: <Navigate to="/" />,
  },
  {
    path: '/profile/*',
    element: isLoggedIn ? <Userprofile /> : <Navigate to="/login" />,
    children: [
      {
        path: 'details',
        element: <Mydetails />,
      },
      {
        path: 'address',
        element: <Useraddress />,
      },
      {
        path: 'orders',
        element: <Userorders />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default AuthenticationRoutes;
