// src/components/ProductCard/ProductCard.jsx
import styles from '../Styles/ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
      <button className={styles.button} onClick={() => onAddToCart(product)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}