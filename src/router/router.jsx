import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductsList from '../components/ProductsList';
import Product from '../components/Product';
import NotFound from '../components/NotFound';
import Cart from '../components/Cart';
import PaginateItems from '../components/PaginateItems';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <PaginateItems productsPerPage={6} />,
            },
            {
                path: '/products/:id',
                element: <Product />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
]);

export default router;
