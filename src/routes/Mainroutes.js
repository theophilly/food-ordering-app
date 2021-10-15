import React, { lazy } from 'react';
import Userprofile from '../pages/Userprofile';
import Mydetails from '../components/user_profile/Mydetails';
import Useraddress from '../components/user_profile/Useraddress';
import Userorders from '../components/user_profile/Userorders';
import Home from '../pages/Home';
import Allfoods from '../pages/Allfoods';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';

const AuthenticationRoutes = [
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
    element: <Login />,
  },
  {
    path: '/profile/*',
    element: <Userprofile />,
    children: [
      {
        path: '/details',
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
    ],
  },
];

export default AuthenticationRoutes;
