import React from 'react'
import { useOutletContext } from 'react-router'

const Checkout = () => {
  const { cart, handleDeleteProduct, totalPrice } = useOutletContext();

  return (
    <div className="min-h-screen bg-sky-500/20 ">
      <h2 className="text-3xl font-bold mb-2 text-center text-amber-200 p-6"> Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-300 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="max-w-xl mx-auto p-4 flex justify-between items-center border-b py-1">
              <img src={item.image} className='h-24 w-24 rounded-full p-4' alt="" />
              <h3 className="text-amber-300 font-semibold">{item.name}</h3>
              <div>
                <p className="text-gray-200">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleDeleteProduct(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-bold text-center text-green-600">Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout
