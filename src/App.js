import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ModalCart from './components/ModalCart';
import Footer from './components/Footer';
import './index.css';

const products = [
    { name: 'Paracetamol-Capsule-500mg', image: 'https://th.bing.com/th/id/R.191cec32210fae7c699c78ecb3771c7b?rik=JHthSkHV%2bPth9g&riu=http%3a%2f%2fimages-its.chemistdirect.co.uk%2fParacetamol-Capsule-500mg-10478.jpg%3fo%3dFCLhOiBNj2TmnCV7ppjbDc6DE3oj%26V%3dTn%24L&ehk=Un67MnAKwwFwftOOff9wMRBTVsZX%2f0ByavrmPg6hgMY%3d&risl=&pid=ImgRaw&r=0', price: 25000 },
    { name: 'Dolex Forte', image: 'https://th.bing.com/th/id/OIP.hMXd-UO5ZXqQzUmhApOWxwHaHa?rs=1&pid=ImgDetMain', price: 10000 },
];

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        alert(`${product.name} añadido al carrito de ventas`);
    };

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <div>
            <Header openCart={openCart} />
            <main>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} addToCart={addToCart} />
                ))}
            </main>
            <ModalCart isOpen={isCartOpen} closeCart={closeCart} cartItems={cartItems} />
            <Footer />
        </div>
    );
};

export default App;
