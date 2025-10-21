// import React, { useState } from 'react'
// import Header from '../Header/Header'
// import { Outlet, useNavigate } from 'react-router'
// import Footer from '../Footer/Footer'
// import Banner from '../Banner/Banner'



// const Root = () => {

//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   // add to cart
//   const handleAddProduct = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };


//   // delete product
//   const handleDeleteProduct = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   //  total price
//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   //  go to checkout
//   const goToCheckout = () => navigate('/checkout');

//   return (
//     <div>
//       <Header
//         cartCount={cart.length}
//         goToCheckout={goToCheckout}
//       />
//       {/* <Banner></Banner> */}
//       <Outlet
//         context={{handleAddProduct, cart, handleDeleteProduct, totalPrice}}></Outlet>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default Root

import React, { useState } from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigate } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ Add or update product in cart
  const handleAddProduct = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        // if already exists, increment quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // add new product with quantity = 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ✅ Delete product
  const handleDeleteProduct = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // ✅ Update quantity (increment/decrement)
  const handleUpdateQuantity = (id, change) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          if (newQty <= 0) return null; // remove if qty <= 0
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean)
    );
  };

  // ✅ Total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const goToCheckout = () => navigate('/checkout');

  return (
    <div>
      <Header
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        goToCheckout={goToCheckout}
      />
      <Outlet
        context={{
          handleAddProduct,
          cart,
          handleDeleteProduct,
          handleUpdateQuantity,
          totalPrice
        }}
      />
      <Footer />
    </div>
  );
};

export default Root;
