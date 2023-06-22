import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        dispatch(addToCart({ ...product, cartQty: 1}));
        navigate('/cart');
    };
    return (
        <div className='w-full'>
            <div className='flex justify-start space-x-2 w-full'>
                <p className='text-green-600'>در انبار موجود است</p>
            </div>
            <button
                className='pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark'
                aria-label='cart-button'
                onClick={() => handleAddtoCart()}
            >
                اضافه به سبد خرید
                <i
                    className='fa fa-cart-arrow-down w-5 mr-2'
                    aria-hidden='true'
                ></i>
            </button>
        </div>
    );
};

export default ProductForm;
