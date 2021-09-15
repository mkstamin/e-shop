/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import AmountButtons from '../amountButtons/AmountButtons';
import Wrapper from './AddToCart.style';

const AddToCart = ({ product }) => {
    const { addToCart } = useCartContext();
    const { id, stock, colors } = product;

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount((pre) => {
            let tempAmount = pre + 1;
            if (tempAmount > stock) {
                tempAmount = stock;
            }
            return tempAmount;
        });
    };

    const decrease = () => {
        setAmount((pre) => {
            let tempAmount = pre - 1;
            if (tempAmount < 1) {
                tempAmount = 1;
            }
            return tempAmount;
        });
    };

    return (
        <Wrapper>
            <div className="colors">
                <span>colors: </span>
                <div>
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{ background: color }}
                            className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                            onClick={() => setMainColor(color)}
                        >
                            {mainColor === color ? <FaCheck /> : null}
                        </button>
                    ))}
                </div>
            </div>
            <div className="btn-container">
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <Link
                    to="/cart"
                    className="btn"
                    onClick={() => addToCart(id, mainColor, amount, product)}
                >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    );
};

export default AddToCart;
