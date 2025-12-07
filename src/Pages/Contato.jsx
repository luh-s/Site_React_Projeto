// src/pages/Contact/Contact.jsx
import styles from '../Components/Styles/Contato.module.css';

export default function Contato() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nome</label>
          <input type="text" required />
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input type="email" required />
        </div>
        <div className={styles.field}>
          <label>Mensagem</label>
          <textarea rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
}