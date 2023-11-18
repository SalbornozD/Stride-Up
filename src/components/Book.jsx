// src/components/Book.js
import React from 'react';

const Book = ({ titulo, autor, descripcion, precio, categoria }) => {
  return (
    <div className="book">
      <h3>{titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Descripción: {descripcion}</p>
      <p>Precio: {precio}</p>
      <p>Categoría: {categoria}</p>
    </div>
  );
};

export default Book;
