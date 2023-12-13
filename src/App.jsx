import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; 
import { CartProvider } from './components/CartContext'; // Ajusta la ruta según tu estructura de archivos

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
            <Route path="/category/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} /> {/* Nueva ruta para el carrito */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
