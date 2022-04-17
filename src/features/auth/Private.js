import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { isSignedIn } from './utils';

const Private = () => {
  const { pathname } = useLocation();
  
  return (
    isSignedIn() ? <Outlet /> : <Navigate to={`/sign-in?back=${encodeURIComponent(pathname)}`} replace />
  );
}

export default Private;
