import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
      {/* Otros elementos de la página del carrito */}
    </div>
  );
};

export default Cart;