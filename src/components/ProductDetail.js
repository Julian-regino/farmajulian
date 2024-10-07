import React from 'react';

const ProductDetail = ({ product, closeDetail }) => {
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={closeDetail}>Cerrar</button>
        </div>
    );
};

export default ProductDetail;