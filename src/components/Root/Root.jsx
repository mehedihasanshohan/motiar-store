import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigate } from 'react-router'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'



const Root = () => {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  
  // add to cart
  const handleAddProduct = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  // delete product
  const handleDeleteProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //  total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  //  go to checkout
  const goToCheckout = () => navigate('/checkout');

  return (
    <div>
      <Header
        cartCount={cart.length}
        goToCheckout={goToCheckout}
      />
      {/* <Banner></Banner> */}
      <Outlet
        context={{handleAddProduct, cart, handleDeleteProduct, totalPrice}}></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root

