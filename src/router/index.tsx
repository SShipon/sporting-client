import AboutUs from '@/components/About Us/AboutUs';
import AddProduct from '@/components/AddProduct/AddProduct';
import MainLayout from '@/components/Layouts/MainLayouts';
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
