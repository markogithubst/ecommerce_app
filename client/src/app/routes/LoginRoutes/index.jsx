import LoginLayout from '../../layout/LoginLayout';

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

// ==============================|| MAIN ROUTING ||============================== //

const LoginRoutes = {
  path: 'gadget-guru',
  element: <LoginLayout />,
  children: [
    {
      path: 'sign-up',
      element: <SignUp />
    },
    {
      path: 'sign-in',
      element: <SignIn />
    }
  ]
};

export default LoginRoutes;
