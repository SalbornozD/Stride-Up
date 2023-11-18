// src/components/BookList.jsx
import React from 'react';
import Book from './Book';

const BookList = ({ categoria }) => {
  const books = [
    { titulo: 'Harry Potter y la Piedra Filosofal', autor: 'J.K. Rowling', descripcion: 'Primera entrega de la saga Harry Potter.', precio: '$20', categoria: 'Infantil' },
    { titulo: 'El visitante', autor: 'Stephen King', descripcion: 'Novela de terror del famoso autor Stephen King.', precio: '$25', categoria: 'Terror' },
    { titulo: 'Cazadores de sombras', autor: 'Cassandra Clare', descripcion: 'Historia de ficción y fantasía.', precio: '$18', categoria: 'Ficcion' },
    { titulo: 'Harry Potter y el Prisionero de Azkaban', autor: 'J.K. Rowling', descripcion: 'Tercera entrega de la saga Harry Potter.', precio: '$30', categoria: 'Infantil' },
  ];

  const filteredBooks = categoria ? books.filter(book => book.categoria.toLowerCase() === categoria.toLowerCase()) : books;

  return (
    <div className="book-list">
      {filteredBooks.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;
