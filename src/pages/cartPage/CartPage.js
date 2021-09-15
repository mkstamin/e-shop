import React from 'react';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../../components';
import { useCartContext } from '../../context/cart_context';
import Wrapper from './CartPage.style';

const CartPage = () => {
    const { cart } = useCartContext();

    if (cart.length < 1) {
        return (
            <Wrapper className="page-100">
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link to="/products" className="btn">
                        Add Items
                    </Link>
                </div>
            </Wrapper>
        );
    }

    return (
        <main>
            <PageHero title="cart" />
            <Wrapper className="page">
                <CartContent />
            </Wrapper>
        </main>
    );
};

export default CartPage;
