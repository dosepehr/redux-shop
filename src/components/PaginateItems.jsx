import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ProductsList from './ProductsList';
import { useGetProductsQuery } from '../redux/reducers/apiSlice';

const PaginateItems = ({ productsPerPage }) => {
    const { data: products, isLoading } = useGetProductsQuery();
    const [itemOffset, setItemOffset] = useState(0);

    const searchQuery = useSelector((state) => state.products.searchQuery);
    const filteredProducts = products?.filter((prodcut) =>
        prodcut.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const endOffset = itemOffset + productsPerPage;

    const currentProducts = filteredProducts?.slice(itemOffset, endOffset);

    const pageCount = Math.ceil(filteredProducts?.length / productsPerPage);

    const handlePageClick = (e) => {
        const newOffset = e.selected * productsPerPage;

        setItemOffset(newOffset);
    };
    return (
        <>
            {isLoading ? (
                <p>درحال بارگذاری</p>
            ) : (
                <>
                    <ProductsList currentProducts={currentProducts} />
                    <ReactPaginate
                        containerClassName='flex justify-center items-center mt-8 mb-4'
                        pageClassName='block border border-solid border-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-2'
                        activeClassName='bg-palette-primary text-palette-light hover:bg-palette-dark'
                        breakLabel='...'
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={null}
                        nextLabel={null}
                        renderOnZeroPageCount={null}
                    />
                </>
            )}
        </>
    );
};

export default PaginateItems;
