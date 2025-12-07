
import { useState, useEffect } from 'react';
import { useCart } from '../Components/Layout/Cartcontext';
import ProductCard from '../Components/Layout/ProductCard';
import styles from '../Components/Styles/Home.module.css';

export default function Home() {
  const { addToCart } = useCart();

  // Simulação de dados (em um projeto real, viria de API ou JSON)
  const [products] = useState([
    { id: 1, name: 'Camiseta Básica', price: 49.9, image: '/images/tshirt.jpg' },
    { id: 2, name: 'Caneca Personalizada', price: 25.0, image: '/images/mug.jpg' },
    { id: 3, name: 'Poster Minimalista', price: 35.9, image: '/images/poster.jpg' },
    { id: 4, name: 'Caderno Capa Dura', price: 29.9, image: '/images/notebook.jpg' },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossos Produtos</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}