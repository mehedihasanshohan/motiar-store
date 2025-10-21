// import React from 'react'
// import { useOutletContext } from 'react-router'

// const Checkout = () => {
//   const { cart, handleDeleteProduct, totalPrice } = useOutletContext();

//   return (
//     <div className="min-h-screen bg-sky-500/20 ">
//       <h2 className="text-3xl font-bold mb-2 text-center text-amber-200 p-6"> Checkout</h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-300 text-lg">Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="max-w-xl mx-auto p-4 flex justify-between items-center border-b py-1">
//               <img src={item.image} className='h-24 w-24 rounded-full p-4' alt="" />
//               <h3 className="text-amber-300 font-semibold">{item.name}</h3>
//               <div>
//                 <p className="text-gray-200">${item.price.toFixed(2)}</p>
//               </div>
//               <button
//                 onClick={() => handleDeleteProduct(item.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
//                 Delete
//               </button>
//             </div>
//           ))}
//           <div className="mt-6 text-right">
//             <h3 className="text-2xl font-bold text-center text-green-600">Total: ${totalPrice.toFixed(2)}</h3>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Checkout


import React from 'react'
import { useOutletContext } from 'react-router'

const Checkout = () => {
  const { cart, handleDeleteProduct, handleUpdateQuantity, totalPrice } = useOutletContext();

  return (
    <div className="min-h-screen bg-sky-500/20 ">
      <h2 className="text-3xl font-bold mb-2 text-center text-amber-200 p-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-300 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="max-w-xl mx-auto flex justify-between items-center border-b py-3 px-2"
            >
              <img src={item.image} alt="" className="h-20 w-20 rounded-lg" />
              <div className="flex-1 px-4">
                <h3 className="text-amber-300 font-semibold">{item.name}</h3>
                <p className="text-gray-300 text-sm">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, -1)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    -
                  </button>
                  <span className="text-lg text-white font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, 1)}
                    className="bg-green-500 text-white px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-gray-200 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleDeleteProduct(item.id)}
                  className="bg-red-600 text-white px-3 py-1 mt-2 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-green-400">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout;
