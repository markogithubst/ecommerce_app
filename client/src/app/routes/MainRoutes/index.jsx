import MainLayout from '../../layout/MainLayout';

// render - dashboard
import HomeDefault from '../../pages/Home';
import Order from '../../pages/Order';
import Product from '../../pages/Product';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomeDefault />
    },
    {
      path: '/order',
      element: <Order />
    },
    {
      path: '/products/smartwatches',
      element: <Product />
    },
    {
      path: '/products/speakers',
      element: <Product />
    },
    {
      path: '/products/cameras',
      element: <Product />
    },
    {
      path: '/products/mobile-phones',
      element: <Product />
    },
    {
      path: '/products/laptops',
      element: <Product />
    },
    {
      path: '/products/headphones-and-earphones',
      element: <Product />
    },
    {
      path: '*',
      element: <HomeDefault />
    }
  ]
};

export default MainRoutes;
