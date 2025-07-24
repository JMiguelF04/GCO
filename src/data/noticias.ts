export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  descricao?: string;
  data: string;
  categoria: string;
  imagem: string;
  link: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Apurados para o Mundial de Trampolins 2025",
    resumo: "Os nossos ginastas Matilde Louro e Miguel Matias, do Ginásio Clube de Odivelas, estão oficialmente apurados para o Campeonato do Mundo por Grupos de Idades (CMGI) que se irá realizar de 13 a 16 de novembro de 2025, em Pamplona, Espanha! 🌍🤸‍♀️",
    descricao: "Com enorme orgulho, anunciamos os seus resultados de apuramento no ranking nacional:\n\n✨ Matilde Louro escalão 11/12 anos:\n🥇 1.º lugar em Duplo Mini Trampolim\n🥉 3.º lugar em Trampolim Individual\n\n✨ Miguel Matias escalão 11/12 anos:\n🥈 2.º lugar em Duplo Mini Trampolim\n🥉 3.º lugar em Trampolim Individual\n🥇 1.º lugar em Trampolim Sincronizado com o seu par Rodrigo Aniceto\n\nEstamos imensamente orgulhosos do percurso destes jovens talentos que continuam a elevar o nome do nosso clube e do nosso país! 💪🇵🇹\n\n📍 Siga Pamplona 🔜🇪🇸 Rumo ao Mundial! 🌟",
    data: "10/JUN/2025",
    categoria: "Ginástica",
    imagem: "/Captura de ecrã 2025-07-24 195952.png",
    link: "/noticias/taca-inatel-andebol-2025"
  },
  {
    id: 2,
    titulo: "CAMPEONATO DISTRITAL DA 2ª DIVISÃO XADREZ",
    resumo: "Foi no passado dia 24 Maio, dia da última jornada do Campeonato Distrital da 2ª Divisão de Clássicas da AX...",
    data: "25/MAI/2025",
    categoria: "Xadrez",
    imagem: "/GCO-LOGO-noBG.png",
    link: "/noticias/campeonato-xadrez-2025"
  },
  {
    id: 3,
    titulo: "REGULAMENTO GERAL DA PATINAGEM ARTÍSTICA",
    resumo: "Informamos que foi colocada uma nova publicação na Pasta de Apoio da Plataforma da Patinagem Artística da Federação de...",
    data: "08/JAN/2025",
    categoria: "Patinagem",
    imagem: "/GCO-LOGO-noBG.png",
    link: "/noticias/regulamento-patinagem"
  },
  {
    id: 4,
    titulo: "CADERNETA OFICIAL 24-25",
    resumo: "O Ginásio Clube de Odivelas (GCO), é uma instituição desportiva de referência, com 46 anos de existência e dedicação...",
    data: "24/DEZ/2024",
    categoria: "Clube",
    imagem: "/GCO-LOGO-noBG.png",
    link: "/noticias/caderneta-oficial"
  }
];
