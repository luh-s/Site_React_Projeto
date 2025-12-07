// src/pages/Cart/Cart.jsx
import { useCart } from '../Components/Layout/Cartcontext';
import styles from '../Components/Styles/Carrinho.module.css';

export default function Carrinho() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🛒 Meu Carrinho</h1>

      {items.length === 0 ? (
        <p className={styles.empty}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.thumb} />
                <div className={styles.info}>
                  <h3>{item.name}</h3>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
                <div className={styles.controls}>
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button
                  className={styles.remove}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button className={styles.checkout}>Finalizar Compra</button>
            <button className={styles.clear} onClick={clearCart}>
              Limpar Carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}