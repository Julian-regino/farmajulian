import React from 'react';

const ProductDetail = ({ product, closeDetail }) => {
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />