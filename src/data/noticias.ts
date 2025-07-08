export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  categoria: string;
  imagem: string;
  link: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "TAÇA INATEL ANDEBOL LISBOA 2025",
    resumo: "Foi com mais uma vitória (27-18 contra o Liberdade FC) que a nossa equipa de Andebol, que este ano disputou...",
    data: "10/JUN/2025",
    categoria: "Andebol",
    imagem: "/GCO-LOGO-noBG.png",
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
