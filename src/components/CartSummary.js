import React from 'react';

const CartSummary = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <div className="cart-summary">
            <h2>Resumen del Carrito</h2>
            <p>Total de productos: {cartItems.length}</p>
            <p>Total: ${totalPrice}</p>
        </div>
    );
};

export default CartSummary;