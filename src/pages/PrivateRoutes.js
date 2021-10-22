import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ element, path }) {
  const authed = useSelector((state) => state.authReducer.authenticated);

  const ele =
    authed === true ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: path }} />
    );

  return <Route path={path} element={ele} />;
}
