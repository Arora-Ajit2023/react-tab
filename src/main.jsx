import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './Api call/Products';
import ProductDetails from './Api call/ProductDetals';
import ProductProvider from './Api call/context';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </>
);
