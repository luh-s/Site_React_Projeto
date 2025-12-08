import { useState, useEffect } from 'react';
import { useCart } from '../Components/Layout/Cartcontext';
import CategorySection from '../Components/Layout/CategorySection'; 
import styles from '../Components/Styles/Home.module.css';


const products = [
  { id: 1, name: "Camiseta Básica Gola V", price: 49.9, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", category: "camisetas" },
  { id: 2, name: "Camiseta Estampada Minimalista", price: 59.9, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300", category: "camisetas" },
  { id: 3, name: "Camiseta de Algodão Orgânico", price: 69.9, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300", category: "camisetas" },
  { id: 4, name: "Camiseta Unissex Oversized", price: 74.9, image: "https://img.freepik.com/fotos-gratis/bela-garota-loira-com-uma-camiseta-branca-grande-e-calcas-de-ganga-azuis-posando-em-um-fundo-cinza_89887-908.jpg?semt=ais_se_enriched&w=740&q=80", category: "camisetas" },
  { id: 5, name: "Camiseta com Frase Motivacional", price: 54.9, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=300", category: "camisetas" },

  { id: 6, name: 'Caneca Cerâmica 350ml', price: 29.9, image: 'https://images.tcdn.com.br/img/img_prod/913621/caneca_ceramica_floral_1221_2_7cf7244b8e8de5e18bc8ebfb73b02715.jpg', category: 'acessorios' },
  { id: 7, name: 'Adesivo Pack (5 unidades)', price: 19.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tjqY6H3RU9vxfwMSQFYSv3PMaSjfUkYLsw&s', category: 'acessorios' },
  { id: 8, name: 'Chaveiro de Madeira Personalizado', price: 22.5, image: 'https://img.elo7.com.br/product/zoom/4E0A2D8/chaveiro-de-madeira-lembrancinhas.jpg', category: 'acessorios' },
  { id: 9, name: 'Boné Ajustável Premium', price: 45.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeG_zuULcrZj24JCt2WLRzd6PsawExNDM1w&s', category: 'acessorios' },
  { id: 10, name: 'Bolsa Térmica Portátil', price: 38.9, image: 'https://cdn.sistemawbuy.com.br/arquivos/c04f63469c29a40876e0a3d886b8c424/produtos/WOU7QIO6/fotorafacusato-7236-6196be4952f42.jpg', category: 'acessorios' },

  { id: 11, name: "Poster Minimalista 50x70cm", price: 42.9, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300", category: "decoracao" },
  { id: 12, name: "Quadro com Moldura de Madeira", price: 89.9, image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=300", category: "decoracao" },
  { id: 13, name: "Luminária de Mesa LED", price: 79.9, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300", category: "decoracao" },
  { id: 14, name: "Planta Suculenta + Vaso", price: 34.5, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=300", category: "decoracao" },
  { id: 15, name: "Espelho Decorativo Pequeno", price: 64.9, image: "https://images.tcdn.com.br/img/img_prod/626532/espelho_decorativo_para_sala_de_estar_ambiente_aqua_60cm_marrom_imcal_67721_1_cac881c6e8d213d972dfb7b5c15af6b5.jpg", category: "decoracao" },

  { id: 16, name: "Caderno Capa Dura 96 folhas", price: 32.9, image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=300", category: "papelaria" },
  { id: 17, name: "Caneta Esferográfica Premium", price: 18.5, image: "https://cdn.awsli.com.br/600x700/765/765263/produto/39695200/70b9891827.jpg", category: "papelaria" },
  { id: 18, name: "Marcador de Livro Metálico", price: 12.9, image: "https://m.media-amazon.com/images/I/71vfb8sLZsL._AC_UF350,350_QL80_.jpg", category: "papelaria" },
  { id: 19, name: "Estojo Organizador 3 divisões", price: 26.9, image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=300", category: "papelaria" },
  { id: 20, name: "Agenda Acadêmica 2025", price: 44.9, image: "https://img.elo7.com.br/product/zoom/512E01B/agenda-2025-1-dia-por-pagina-sem-horas-arquivo-digital-agenda-com-calendario.jpg", category: "papelaria" },

  { id: 21, name: "Design Thinking para Iniciantes", price: 59.9, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=300", category: "livros" },
  { id: 22, name: "Front-End com React", price: 79.9, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300", category: "livros" },
  { id: 23, name: "UX/UI: Guia Prático", price: 68.5, image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300", category: "livros" },
  { id: 24, name: "Empreendedorismo Acadêmico", price: 54.9, image: "https://staticbv.bvirtual.com.br/publicacoes/173412/thumbs/thumbnail_397_x_595.jpg", category: "livros" },
  { id: 25, name: "Finanças Pessoais para Estudantes", price: 49.9, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300", category: "livros" },

  { id: 26, name: "Kit Estudante", price: 65.0, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300", category: "kits" },
  { id: 27, name: "Kit Café & Estudo", price: 48.9, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300", category: "kits" },
  { id: 28, name: "Kit Presente Acadêmico", price: 89.9, image: "https://leblank.com.br/cdn/shop/files/a622a93f772b53dfbc8f63e4e70aa360.jpg?v=1755985827", category: "kits" },

  { id: 29, name: "Mochila Leve com USB", price: 129.9, image: "https://blogdoiphone.com/wp-content/uploads/2017/12/KINGSON_mochila2_8.jpg", category: "lancamentos" },
  { id: 30, name: "Power Bank 10.000mAh", price: 84.9, image: "https://a-static.mlcdn.com.br/420x420/carregador-portatil-power-bank-grande-50000mah-turbo-22-5w-pd-rapido-agold-bte-61-a-gold/hope4i/power-5000/89e4da519019956efffe5401ddae59dd.jpeg", category: "lancamentos" }
];




const categories = [
  { id: 'camisetas', name: '👕 Camisetas' },
  { id: 'acessorios', name: '👓 Acessórios' },
  { id: 'decoracao', name: '🖼️ Decoração' },
  { id: 'papelaria', name: '📓 Papelaria' },
  { id: 'livros', name: '📚 Livros' },
  { id: 'kits', name: '🎁 Kits Promocionais' },
  { id: 'lancamentos', name: '✨ Lançamentos' },
];

export default function Home() {
  const { addToCart } = useCart();

  const categorized = categories.map(cat => {
    const items = products.filter(p => p.category === cat.id);
    return { ...cat, items: items.slice(0, 5) }; // ← mostra só 5 por categoria
  });

  return (
    <div className={styles.container}>
      {/* Hero Section (cabeçalho moderno) */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Bem-vindo à VendaTudo</h1>
        <p className={styles.heroSubtitle}>
          Produtos criativos, selecionados com carinho para o seu dia a dia acadêmico.
        </p>
      </div>

      {/* Seções por categoria */}
      <div className={styles.categories}>
        {categorized.map((category) => (
          <CategorySection
            key={category.id}
            title={category.name}
            products={category.items}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}