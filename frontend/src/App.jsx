import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import Contact from './components/contact/Contact'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useContext } from 'react'
import { StoreContext } from './context/StoreContext'
import Toaster from 'react-hot-toast'

const App = () => {
  const { token } = useContext(StoreContext);
  return (
    <>
      {token === "" ? <LoginPopUp /> : <>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </>}
    </>
  )
}

export default App
