export interface Modalidade {
  nome: string;
  slug: string;
  icone: string;
  descricao: string;
  ativo: boolean;
}

export const modalidades: Modalidade[] = [
  { nome: "Andebol", slug: "andebol", icone: "🤾‍♂️", descricao: "Equipes competitivas em várias categorias", ativo: true },
  { nome: "Ginástica", slug: "ginastica", icone: "🤸‍♀️", descricao: "Ginástica artística e rítmica para todas as idades", ativo: true },
  { nome: "Patinagem Artística", slug: "patinagem-artistica", icone: "⛸️", descricao: "Formação e competição em patinagem artística", ativo: true },
  { nome: "Xadrez", slug: "xadrez", icone: "♟️", descricao: "Desenvolvimento estratégico e competições", ativo: true },
  { nome: "Hóquei em Patins", slug: "hoquei-em-patins", icone: "🏒", descricao: "Modalidade temporariamente suspensa devido ao não cumprimento de regulamentações", ativo: false }
];
