import MainLayout from '../../layout/MainLayout';

// render - dashboard
import HomeDefault from '../../pages/Home';

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
      path: '*',
      element: <HomeDefault />
    }
  ]
};

export default MainRoutes;
