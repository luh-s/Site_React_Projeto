// src/Components/Layout/ProductCard.jsx

import { memo } from 'react';
import { useCart } from './Cartcontext';
import styles from '../Styles/ProductCard.module.css';

const ProductCard = memo(({ product }) => { // ✅ memo aqui
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
        loading="lazy" 
        width="260"
        height="260"
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
        <button className={styles.button} onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </div>
  );
});

export default ProductCard;