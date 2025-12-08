// src/Components/Layout/CategorySection.jsx
import { useRef, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../Styles/CategorySection.module.css';

export default function CategorySection({ title, products }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    const newScroll = direction === 'left' 
      ? scrollLeft - scrollAmount 
      : scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  if (products.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.nav}>
          <button
            className={`${styles.arrow} ${!canScrollLeft ? styles.disabled : ''}`}
            onClick={() => scroll('left')}
            aria-label="Produtos anteriores"
          >
            &lt;
          </button>
          <button
            className={`${styles.arrow} ${!canScrollRight ? styles.disabled : ''}`}
            onClick={() => scroll('right')}
            aria-label="Próximos produtos"
          >
            &gt;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={styles.carousel}
        onScroll={onScroll}
      >
        {products.map((product) => (
          <div key={product.id} className={styles.slide}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}