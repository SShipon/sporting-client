import AboutUs from '@/components/About Us/AboutUs';
import AddProduct from '@/components/AddSporting/AddSporting';
import Cart from '@/components/Cart/Cart/Cart';
import Checkout from '@/components/Cart/Checkout/Checkout';
import MainLayout from '@/components/Layouts/MainLayouts';
import SportDetails from '@/components/SingleProduct/SportDetails/SportDetails';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home';

import NotFound from '@/pages/shared/NotFound';
import Sporting from '@/pages/Sporting/Sporting';
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
        path:'sporting',
        element:<Sporting />
      },
      {
        path: 'addProduct',
        element: <AddProduct />,
      },
      {
            path:'contact',
          element:<Contact />
      },
       
    {

      path: 'sportDetails/:id',
      element:<SportDetails />
    },

    {
       path:'cart',
       element:<Cart />
    },

    {
      path:'checkout',
      element:<Checkout />
   },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
