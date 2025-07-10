export interface Modalidade {
  nome: string;
  icone: string;
  descricao: string;
  ativo: boolean;
}

export const modalidades: Modalidade[] = [
  { nome: "Andebol", icone: "🤾‍♂️", descricao: "Equipes competitivas em várias categorias", ativo: true },
  { nome: "Ginástica", icone: "🤸‍♀️", descricao: "Ginástica artística e rítmica para todas as idades", ativo: true },
  { nome: "Patinagem Artística", icone: "⛸️", descricao: "Formação e competição em patinagem artística", ativo: true },
  { nome: "Xadrez", icone: "♟️", descricao: "Desenvolvimento estratégico e competições", ativo: true },
  { nome: "Hóquei em Patins", icone: "🏒", descricao: "Modalidade temporariamente suspensa devido ao não cumprimento de regulamentações", ativo: false }
];
