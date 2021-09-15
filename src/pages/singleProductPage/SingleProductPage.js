import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AddToCart, PageHero, ProductImages, Stars } from '../../components';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { useProductsContext } from '../../context/products_context';
import { single_product_url as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import Wrapper from './SingleProductsPage.style';

const SingleProductPage = () => {
    const { id } = useParams();

    const {
        single_product_loding: loding,
        single_product_error: error,
        single_product: product,
        fetchSingleProducts,
    } = useProductsContext();

    useEffect(() => {
        fetchSingleProducts(`${url}${id}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (loding) return <Loading />;
    if (error) return <Error />;

    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;

    return (
        <Wrapper>
            <PageHero title={name} product />
            <div className="section section-center page">
                <Link to="/products" className="btn">
                    back to products
                </Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="contain">
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className="price">{formatPrice(price)}</h5>
                        <p className="dec">{description}</p>
                        <p className="info">
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                        <p className="info">
                            <span>SKU : </span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    );
};

export default SingleProductPage;
