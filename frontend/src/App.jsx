import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer  from './components/Footer/Footer'
import Login from './components/Login/Login'
import AddItem from './components/AddItem/AddItem'
import Orders from './components/Orders/Orders'
import ListItem from './components/ListItem/ListItem'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/list-items' element={<ListItem />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
