import { useEffect } from 'react';
import { useGetProductsQuery } from '../redux/reducers/apiSlice';
import ProductCard from './ProductCard';
import Header from './Header';
import { useSelector } from 'react-redux';
const ProductsList = () => {
    const { data, isLoading } = useGetProductsQuery();
    const searchQuery = useSelector((state) => state.products.searchQuery);
    const filteredProducts = data?.filter((prodcut) =>
        prodcut.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <Header />
            {isLoading ? (
                <p>درحال بارگذاری</p>
            ) : (
                <div className='py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
                    {filteredProducts?.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductsList;
