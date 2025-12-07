// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './Components/Layout/Cartcontext';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Carrinho from './Pages/Carrinho';
import styles from './Components/Styles/App.module.css';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className={styles.app}>
          {/* Navbar fixa no topo */}
          <Navbar />

          {/* Conteúdo principal com roteamento */}
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Sobre />} />
              <Route path="/contact" element={<Contato />} />
              <Route path="/cart" element={<Carrinho />} />
            </Routes>
          </main>

          {/* Footer fixo no rodapé — vamos garantir que fique no final */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}