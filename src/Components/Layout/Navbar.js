// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cartcontext';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items } = useCart(); 
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      {/* Menu Sanduíche */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nome do site */}
      <Link to="/" className={styles.siteName}>
        VendaTudo
      </Link>

      {/* Carrinho — agora com badge */}
      <Link to="/carrinho" className={styles.cartLink}>
        🛒 
        {totalCount > 0 && (
          <span className={styles.cartBadge}>{totalCount}</span>
        )}
        <span className={styles.cartText}>Carrinho</span>
      </Link>

      {/* Menu suspenso (dropdown) */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/sobre" onClick={toggleMenu}>Sobre</Link>
          <Link to="/contato" onClick={toggleMenu}>Contato</Link>
          <Link to="/carrinho" onClick={toggleMenu}>Carrinho</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;