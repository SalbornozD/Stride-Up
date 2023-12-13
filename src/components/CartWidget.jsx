import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Ajusta la ruta según tu estructura de archivos

const CartWidget = () => {
  const { cart } = useCart();

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        {cart.length === 0 ? (
        <p>Carrito</p>
        ) : (
        <>
        <p>Carrito {cart.length}</p>  
        </>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;