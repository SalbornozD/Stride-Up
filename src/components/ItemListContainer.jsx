import React from 'react';
import BookList from './BookList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams();

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <BookList categoria={categoria} />
    </div>
  );
};

export default ItemListContainer;
