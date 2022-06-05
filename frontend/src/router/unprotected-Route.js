import React from 'react';
import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom';

function UnProtectedRoute() {
    const isLogin = Cookies.get('refreshToken')
    return !isLogin ? <Outlet /> : <Navigate to='/dashboard' />
}

export default UnProtectedRoute