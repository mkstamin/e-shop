import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import Error from '../Error';
import Loading from '../Loading';
import Product from '../product/Product';
import Wrapper from './FeaturedProducts.style';

const FeaturedProducts = () => {
    const {
        products_loading: loding,
        products_error: error,
        featured_products: featured,
    } = useProductsContext();

    if (loding) return <Loading />;
    if (error) return <Error />;

    return (
        <Wrapper className="section">
            <div className="title">
                <h2>featured products</h2>
                <div className="underline" />
            </div>
            <div className="section-center featured">
                {featured.slice(0, 3).map((product) => {
                    const { id, name, price, image } = product;
                    return <Product key={id} data={{ id, name, price, image }} />;
                })}
            </div>
            <Link to="/products" className="btn">
                all products
            </Link>
        </Wrapper>
    );
};

export default FeaturedProducts;
