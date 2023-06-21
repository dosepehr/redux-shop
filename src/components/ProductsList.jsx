import React from 'react';
import { useGetProductsQuery } from '../redux/reducers/apiSlice';
import ProductCard from './ProductCard';
const ProductsList = () => {
    const { data, isLoading } = useGetProductsQuery();
    return (
        <>
            {isLoading ? (
                <p>درحال بارگذاری</p>
            ) : (
                <div className='py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
                    {data?.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductsList;
