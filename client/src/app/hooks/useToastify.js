import { toast } from 'react-toastify';

const options = {
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
};

export const toastifySuccess = (message) => {
  toast.success(message, options);
};

export const toastifyWarning = (message) => {
  toast.warning(message, options);
};

export const toastifyError = (message) => {
  toast.error(message, options);
};
