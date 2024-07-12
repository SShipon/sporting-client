import AboutUs from '@/components/About Us/AboutUs';
import AddProduct from '@/components/AddProduct/AddProduct';
import Cart from '@/components/Cart/Cart/Cart';
import MainLayout from '@/components/Layouts/MainLayouts';
import SingleProduct from '@/components/SingleProduct/SingleProduct/SingleProduct';
import Home from '@/pages/Home/Home';
import Products from '@/pages/Products/Products';

import NotFound from '@/pages/shared/NotFound';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
     
      {
        path:'home',
        element:<Home />
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'addProduct',
        element: <AddProduct />,
      },
       
    {

      path: 'singleProduct/:id',
      element:<SingleProduct />
    },

    {
       path:'cart',
       element:<Cart />
    },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
