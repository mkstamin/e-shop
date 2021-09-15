/* eslint-disable camelcase */
import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';
import Wrapper from './CartButtons.style';

const CartButtons = () => {
    const { closeSidebar } = useProductsContext();
    const { total_items, clearCart } = useCartContext();
    const { loginWithRedirect, logout, myUser } = useUserContext();

    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{total_items}</span>
                </span>
            </Link>

            {myUser ? (
                <button
                    type="button"
                    className="auth-btn"
                    onClick={() => {
                        clearCart();
                        logout({ returnTo: window.location.origin });
                    }}
                >
                    Logout <FaUserMinus />
                </button>
            ) : (
                <button type="button" className="auth-btn" onClick={loginWithRedirect}>
                    login <FaUserPlus />
                </button>
            )}
        </Wrapper>
    );
};

export default CartButtons;
