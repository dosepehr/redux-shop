import ProductCard from './ProductCard';
import Header from './Header';
const ProductsList = ({ currentProducts }) => {

    return (
        <>
            <Header />

            <div className='py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
                {currentProducts?.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </>
    );
};

export default ProductsList;
