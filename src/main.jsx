import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Products from './components/Products/Products';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {index: true, Component: Home},
      {
        path: 'products',
        loader: () => fetch('products.json'),
        Component: Products,
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
    <RouterProvider router={router} />,
  </StrictMode>,
)
