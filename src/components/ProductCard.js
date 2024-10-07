import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="tarjeta">
            <img className="imgenescatalogo" src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button type="button" onClick={() => addToCart(product)}>Añadir al carrito</button>
        </div>
    );
};

export default ProductCard;
