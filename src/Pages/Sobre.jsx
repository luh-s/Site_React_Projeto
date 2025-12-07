import styles from '../Components/Styles/Sobre.module.css';

export default function Sobre() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p className={styles.text}>
        Somos uma loja fictícia criada para o projeto de Web da faculdade.
        Nosso objetivo é demonstrar habilidades em React, CSS Modules e gerenciamento de estado.
      </p>
      <p className={styles.text}>
        Todos os produtos são ilustrativos — não realizamos vendas reais.
      </p>
    </div>
  );
}