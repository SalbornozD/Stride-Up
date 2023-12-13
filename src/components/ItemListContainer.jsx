import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

const ItemListContainer = () => {
  const [libros, setLibros] = useState([]);
  const { categoria } = useParams();
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  useEffect(() => {
    const obtenerLibros = async () => {
      const db = getFirestore();
      const coleccionLibros = collection(db, 'libros');
      const q = categoria ? query(coleccionLibros, where('categoria', '==', categoria)) : coleccionLibros;

      try {
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLibros(docs);
      } catch (error) {
        console.error('Error al obtener libros:', error);
      }
    };

    obtenerLibros();
  }, [categoria]);

  const redirectToItemDetail = (itemId) => {
    navigate(`/item/${itemId}`); // Utiliza navigate en lugar de history.push
  };

  return (
    <div className="catalogo">
      {libros.map((p, index) => (
        <div key={index} className='vista-previa-libro' onClick={() => redirectToItemDetail(p.id)}>
          <h5>{p.titulo}</h5>
          <img src={p.imagen} alt="Portada libro" />
          <p>Precio: ${p.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;