import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Wrapper from './AmountButtons.style';

const AmountButtons = ({ amount, increase, decrease }) => (
    <Wrapper className="amount-btns">
        <button type="button" className="amount-btn" onClick={decrease}>
            <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" className="amount-btn" onClick={increase}>
            <FaPlus />
        </button>
    </Wrapper>
);

export default AmountButtons;
