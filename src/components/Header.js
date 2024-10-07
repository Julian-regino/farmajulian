import React from 'react';

const Header = ({ openCart }) => {
    return (
        <header>
            <nav>
                <a href="#">Catálogo</a>
                <a href="#">Recetas Médicas</a>
                <a href="#">Cerrar sesión</a>
                <div id="openModalCarrito" onClick={openCart}>
                    <a href="#">
                        <img src="src\components\img\carrito.svg.svg" alt="Carrito de compras" />
                    </a>
                    <b><i id="numCarrito">0</i></b>
                </div>
            </nav>
        </header>
    );
};

export default Header; 
