import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductsList from '../components/ProductsList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductsList />,
            },
        ],
    },
]);

export default router;
