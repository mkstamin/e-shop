import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './PageHero.style';

const PageHero = ({ title, product }) => (
    <Wrapper>
        <div className="section-center">
            <h3>
                <Link to="/">Home</Link>
                {product && <Link to="/products">/ Products</Link>}/ {title}
            </h3>
        </div>
    </Wrapper>
);

export default PageHero;
