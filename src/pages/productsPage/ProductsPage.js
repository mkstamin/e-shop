import React from 'react';
import { Filters, PageHero, ProductList, Sort } from '../../components';
import Wrapper from './ProductsPage.style';

const ProductsPage = () => (
    <main>
        <PageHero title="products" />
        <Wrapper className="page">
            <div className="section-center products">
                <Filters />
                <div>
                    <Sort />
                    <ProductList />
                </div>
            </div>
        </Wrapper>
    </main>
);

export default ProductsPage;
