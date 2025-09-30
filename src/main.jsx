import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import ProductDetails from './components/ProductDetails/ProductDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {index: true, Component: Home},
      {
        path: 'products',
        loader: () => fetch('products.json'),
        Component: Products
      },
     {
        path: 'products/:productId',
        loader: async ({ params }) => {
          const res = await fetch('/products.json'); // fetch all products
          const products = await res.json();

          // find the product with the matching id
          const product = products.find(p => p.id === parseInt(params.productId));
          return {product, products};
           },
        Component: ProductDetails
     },
      {path: 'contacts', Component: Contacts},
      {path: 'about', Component: About}
     ]
  },
  {
    path: "/about",
    element: <div>About</div>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
