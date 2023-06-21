import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    </StrictMode>
);

