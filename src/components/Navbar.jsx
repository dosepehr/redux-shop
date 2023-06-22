import { Link } from 'react-router-dom';
import CustomNumeralNumericFormat from './Price';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { searchProduct } from '../redux/reducers/productsSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const cartItems = useSelector((state) => state.cart.cartItems);

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };
    
    useEffect(() => {
        dispatch(searchProduct({ searchQuery }));
    }, [dispatch, searchQuery]);
    return (
        <header className='border-b border-palette-lighter sticky top-0 z-20 bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6'>
                <Link to='/' className='cursor-pointer'>
                    <h1 className='flex no-underline'>
                        <span className='text-xl font-primary font-bold tracking-tight pt-1'>
                            فروشگاه استیکر
                        </span>
                    </h1>
                </Link>
                <div className='border-palette-primary border-2'>
                    <input
                        type='text'
                        className='p-2 px-4'
                        placeholder='جستجو کنید'
                        value={searchQuery}
                        onChange={(e) => handleSearchQuery(e)}
                    />
                </div>
                <div>
                    <Link to='/cart' className='relative'>
                        <i
                            className='fa fa-cart-arrow-down text-palette-primary m-auto'
                            style={{ fontSize: '30px' }}
                        ></i>
                        {cartItems.length === 0 ? null : (
                            <div className='absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3'>
                                <CustomNumeralNumericFormat
                                    value={cartItems.length}
                                    thousandSeparator=','
                                />
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
