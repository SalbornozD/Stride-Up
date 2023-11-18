// src/components/ItemDetailContainer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Book from './Book';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const books = [
    { id: '1', titulo: 'Harry Potter y la Piedra Filosofal', autor: 'J.K. Rowling', descripcion: 'Primera entrega de la saga Harry Potter.', precio: '$20', categoria: 'Infantil' },
    { id: '2', titulo: 'El visitante', autor: 'Stephen King', descripcion: 'Novela de terror del famoso autor Stephen King.', precio: '$25', categoria: 'Terror' },
    { id: '3', titulo: 'Cazadores de sombras', autor: 'Cassandra Clare', descripcion: 'Historia de ficción y fantasía.', precio: '$18', categoria: 'Ficción' },
    { id: '4', titulo: 'Harry Potter y el Prisionero de Azkaban', autor: 'J.K. Rowling', descripcion: 'Tercera entrega de la saga Harry Potter.', precio: '$30', categoria: 'Infantil' },
  ];
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  return (
    <div>
      <h2>Detalles del Libro</h2>
      <Book {...book} />
    </div>
  );
};

export default ItemDetailContainer;
