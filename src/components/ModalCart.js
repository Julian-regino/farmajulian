import React from 'react';

const ModalCart = ({ isOpen, closeCart, cartItems }) => {
    return (
        <section className={`modal-carrito ${isOpen ? 'modal-show' : ''}`}>
            <div className="modal-container-carrito">
                <div className="modal-header">
                    <h2>Carrito de compras</h2>
                </div>
                <div className="modal-body">
                    {cartItems.map((item, index) => (
                        <div key={index} className="lista-carrito">
                            <h2>{item.name}</h2>
                            <i>${item.price}</i>
                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button type="button" id="btnCerrarModalCarro" onClick={closeCart}>
                        Cerrar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ModalCart;

