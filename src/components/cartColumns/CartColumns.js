import React from 'react';
import Wrapper from './CartColumns.style';

const CartColumns = () => (
    <Wrapper>
        <div className="content">
            <h5>Item</h5>
            <h5>price</h5>
            <h5>quentity</h5>
            <h5>subtotal</h5>
            <span />
        </div>
        <hr />
    </Wrapper>
);

export default CartColumns;
