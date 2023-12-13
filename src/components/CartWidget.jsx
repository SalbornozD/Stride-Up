// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart-fill"></i>
      <span className="badge badge-primary">10</span>
    </div>
  );
};

export default CartWidget;
