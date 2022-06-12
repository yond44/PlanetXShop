import React from 'react';
import Cookies from 'js-cookie';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
    const isLogin = Cookies.get('refreshToken')
    return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute