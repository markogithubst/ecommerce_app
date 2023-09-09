// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <App />
  </Provider>
  // </React.StrictMode>
);

// React.StrictMode is commented out because the components rendered two times with it
