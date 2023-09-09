import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <>
      <h1>Gadget-Guru</h1>
      <Outlet />
    </>
  );
};

export default LoginLayout;
