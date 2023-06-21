import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductsList from '../components/ProductsList';
import Product from '../components/Product';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductsList />,
            },
            {
                path: '/products/:id',
                element: <Product />,
            },
        ],
    },
]);

export default router;
