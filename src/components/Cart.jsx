import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio, 0);
  };

  return (
    <div id='pagina-carrito'>
      <h2>Mi pedido</h2>
      <div className='carrito'>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className='producto-carrito'>
                    <img src={item.imagen} alt="Foto producto" className='foto-carrito' />
                    <p className='titulo-carrito'>{item.titulo}</p>
                    <p className='precio-carrito'>Precio: ${item.precio}</p>
                    <button className='btn-eliminar' onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <button onClick={clearCart}>Vaciar Carrito</button>
              <h3>Total: ${calculateTotal()}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;