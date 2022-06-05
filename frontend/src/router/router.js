import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/home'
import Register from '../pages/register'
import Dashboard from '../pages/Dashboard'
import HeaderDashB from '../component/header/Header-DashB'
import MyProduct from '../pages/MyProduct'
import Profile from '../pages/Profile'
import ChangePassword from '../pages/ChangePassword'
import ProtectedRoute from './protected-Route'
import DetailProduct from '../pages/DetailProduct'
import Footer from '../component/footer/footer'
import UnProtectedRoute from './unprotected-Route'


function Router() {
  return (
    <BrowserRouter>
      <HeaderDashB />
      <Routes>
        <Route element={<UnProtectedRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </ Route>
        <Route path="/detail-product/:id" element={<DetailProduct />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<MyProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/password' element={<ChangePassword />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router