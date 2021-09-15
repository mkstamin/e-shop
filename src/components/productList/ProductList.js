/* eslint-disable camelcase */
import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import GridView from '../gridView/GridView';
import ListView from '../listView/ListView';

const ProductList = () => {
    const { filtered_products: products, grid_view } = useFilterContext();

    if (products.length < 1) {
        return <h5 style={{ textTransform: 'none' }}>Sorry, no products match...</h5>;
    }

    if (grid_view === false) {
        return <ListView products={products} />;
    }

    return <GridView products={products}>Product List</GridView>;
};

export default ProductList;
