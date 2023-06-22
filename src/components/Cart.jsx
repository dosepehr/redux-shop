import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CustomNumeralNumericFormat from './Price';
import {
    addToCart,
    decreaseCart,
    getTotals,
    selectAll,
} from '../redux/reducers/cartSlice';
import { removeFromCart } from '../redux/reducers/cartSlice';
import QtyInput from './QtyInput';
const Cart = () => {
    const cart = useSelector(selectAll);
    const {cartTotalAmount} = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleAddtoCart = (item) => {
        dispatch(addToCart({ ...item, cartQty: 1 }));
    };
    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item));
    };
    return (
        <div className='container mx-auto mb-20 min-h-screen'>
            {cart.length === 0 ? (
                <div className='text-center mt-10'>
                    <p>سبد خرید شما خالی است ☺️</p>
                </div>
            ) : (
                <>
                    <h1 className='leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4'>
                        سبد خرید شما
                    </h1>

                    <div className='min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full'>
                        <table className='mx-auto'>
                            <thead>
                                <tr className='uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light'>
                                    <th className='font-primary font-normal px-6 py-4'>
                                        محصول
                                    </th>
                                    <th className='font-primary font-normal px-6 py-4'>
                                        تعداد
                                    </th>
                                    <th className='font-primary font-normal px-6 py-4 hidden sm:table-cell'>
                                        قیمت
                                    </th>
                                    <th className='font-primary font-normal px-6 py-4'>
                                        حذف
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-palette-lighter'>
                                {cart.map((item) => (
                                    <tr
                                        key={item.id}
                                        className='text-sm sm:text-base text-gray-600 text-center'
                                    >
                                        <td className='font-primary font-medium px-4 sm:px-6 py-4 flex items-center'>
                                            <img
                                                src={`http://localhost:9000/images/${item.sticker}`}
                                                alt={item.title}
                                                height={64}
                                                width={64}
                                                className={`hidden sm:inline-flex`}
                                            />
                                            <Link
                                                to={`/products/${item.id}`}
                                                className='pt-1 hover:text-palette-dark'
                                            >
                                                {item.title}
                                            </Link>
                                        </td>
                                        <td className='font-primary font-medium px-4 sm:px-6 py-4'>
                                            <QtyInput
                                                qty={item.cartQty}
                                                incrementQty={() =>
                                                    handleAddtoCart(item)
                                                }
                                                decrementQty={() =>
                                                    handleDecreaseCart(item)
                                                }
                                            />
                                        </td>
                                        <td className='font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell'>
                                            <CustomNumeralNumericFormat
                                                value={
                                                    item.price * item.cartQty
                                                }
                                                thousandSeparator=','
                                                prefix={`قیمت : ‍‍‍`}
                                                suffix={` تومان `}
                                            />
                                        </td>
                                        <td className='font-primary font-medium px-4 sm:px-6 py-4'>
                                            <button
                                                aria-label='delete-item'
                                                className=''
                                                onClick={() =>
                                                    handleRemoveFromCart(item)
                                                }
                                            >
                                                <i
                                                    className='fa fa-times w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter'
                                                    aria-hidden='true'
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {cartTotalAmount === 0 ? null : (
                                    <tr className='text-center'>
                                        <td></td>
                                        <td className='font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4'>
                                            قیمت کل :
                                        </td>
                                        <td className='font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4'>
                                            <CustomNumeralNumericFormat
                                                value={cartTotalAmount}
                                                thousandSeparator=','
                                                suffix={` تومان `}
                                            />
                                        </td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='max-w-sm mx-auto space-y-4 px-2'>
                        <Link
                            to=''
                            className='bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm'
                        >
                            تایید نهایی
                            <i
                                className='fa fa-arrow-right w-4 mr-2 inline-flex'
                                aria-hidden='true'
                            ></i>
                        </Link>

                        <Link
                            to='/'
                            className='border border-palette-primary text-palette-primary mt-5 text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm'
                        >
                            <i
                                className='fa fa-arrow-left w-4 mr-2 inline-flex'
                                aria-hidden='true'
                            ></i>
                            برگشت به صفحه محصولات
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
