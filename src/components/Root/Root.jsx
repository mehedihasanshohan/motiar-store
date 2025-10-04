import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'



const Root = () => {

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  return (
    <div>
      <Header cartCount={cart.length}></Header>
      {/* <Banner></Banner> */}
      <Outlet context={{handleAddProduct}}></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root

