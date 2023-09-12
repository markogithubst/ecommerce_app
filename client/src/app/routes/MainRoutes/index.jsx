import MainLayout from '../../layout/MainLayout';

// render - dashboard
import HomeDefault from '../../pages/Home';
import Order from '../../pages/Order';

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
      path: '*',
      element: <HomeDefault />
    }
  ]
};

export default MainRoutes;
