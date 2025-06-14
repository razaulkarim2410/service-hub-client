import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  console.log(user);

  if (user & user?.email) {
    return children;
  }
  return <Navigate to={'/login'}></Navigate>



};

export default PrivateRoute;