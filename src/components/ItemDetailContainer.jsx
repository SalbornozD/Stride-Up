import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      const db = getFirestore();
      const item = doc(db, 'libros', id);

      try {
        const snapshot = await getDoc(item);

        if (snapshot.exists()) {
          const data = snapshot.data();
          setProducto(data);
        } else {
          setError('El libro no existe.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError('Hubo un error al obtener el libro.');
      }
    };

    obtenerProducto();
  }, [id]);

  return (
    <div className='vista-completa-libro'>
      {error ? (
        <h4>{error}</h4>
      ) : (
        <>
          <img src={producto.imagen} alt="Imagen del producto" />
          <h2 className='titulo'>{producto.titulo}</h2>
          <h3 className='categoria'>{producto.categoria}</h3>
          <h3 className='precio'>{producto.precio}</h3>
          <h3 className='autor'>{producto.autor}</h3>
          <p className='descripcion'>{producto.descripcion}</p>
          
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;