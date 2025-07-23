export interface Atleta {
  id: number;
  nome: string;
  apelido: string;
  nomeCompleto: string;
  idade: number;
  dataNascimento: string;
  modalidade: string;
  categoria: string;
  numero?: number;
  posicao?: string;
  foto?: string;
  ativo: boolean;
  dataInscricao: string;
  anos_no_clube: number;
  contacto: {
    telefone?: string;
    email?: string;
    encarregado_educacao?: {
      nome: string;
      telefone: string;
      email?: string;
      parentesco: string;
    };
  };
  endereco: {
    rua: string;
    codigo_postal: string;
    localidade: string;
  };
  estatisticas?: {
    jogos_realizados?: number;
    golos_marcados?: number;
    assistencias?: number;
    cartoes_amarelos?: number;
    cartoes_vermelhos?: number;
    pontuacao_media?: number;
    melhor_classificacao?: string;
  };
  conquistas: string[];
  observacoes?: string;
  nivel_competencia: 'Iniciação' | 'Formação' | 'Competição' | 'Alto Rendimento';
  horario_treino: string[];
}

export const atletas: Atleta[] = [
  // ANDEBOL - Iniciados Masculinos
  {
    id: 1,
    nome: "João",
    apelido: "Silva",
    nomeCompleto: "João Miguel Silva",
    idade: 13,
    dataNascimento: "2011-03-15",
    modalidade: "andebol",
    categoria: "Iniciados Masculinos",
    numero: 7,
    posicao: "Extremo Esquerdo",
    foto: "/atletas/joao-silva.jpg",
    ativo: true,
    dataInscricao: "2022-09-01",
    anos_no_clube: 2,
    contacto: {
      encarregado_educacao: {
        nome: "Maria Silva",
        telefone: "912345678",
        email: "maria.silva@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Rua das Flores, 123",
      codigo_postal: "2675-123",
      localidade: "Odivelas"
    },
    estatisticas: {
      jogos_realizados: 24,
      golos_marcados: 45,
      assistencias: 12,
      cartoes_amarelos: 2,
      cartoes_vermelhos: 0
    },
    conquistas: [
      "Melhor Marcador do Torneio Escolar 2023",
      "2º Lugar Campeonato Distrital Iniciados 2024"
    ],
    nivel_competencia: "Competição",
    horario_treino: ["Segunda-feira 19:30-21:30", "Quarta-feira 19:30-21:30", "Sexta-feira 19:30-21:30"]
  },
  {
    id: 2,
    nome: "Pedro",
    apelido: "Santos",
    nomeCompleto: "Pedro Henrique Santos",
    idade: 14,
    dataNascimento: "2010-07-22",
    modalidade: "andebol",
    categoria: "Iniciados Masculinos",
    numero: 12,
    posicao: "Guarda-Redes",
    foto: "/atletas/pedro-santos.jpg",
    ativo: true,
    dataInscricao: "2021-09-01",
    anos_no_clube: 3,
    contacto: {
      encarregado_educacao: {
        nome: "António Santos",
        telefone: "913456789",
        email: "antonio.santos@email.com",
        parentesco: "Pai"
      }
    },
    endereco: {
      rua: "Avenida da República, 456",
      codigo_postal: "2675-456",
      localidade: "Odivelas"
    },
    estatisticas: {
      jogos_realizados: 28,
      golos_marcados: 0,
      assistencias: 0,
      cartoes_amarelos: 1,
      cartoes_vermelhos: 0
    },
    conquistas: [
      "Melhor Guarda-Redes do Torneio Regional 2023",
      "Capitão da Equipa 2024"
    ],
    nivel_competencia: "Competição",
    horario_treino: ["Segunda-feira 19:30-21:30", "Quarta-feira 19:30-21:30", "Sexta-feira 19:30-21:30"]
  },

  // ANDEBOL - Juvenis Femininos
  {
    id: 3,
    nome: "Ana",
    apelido: "Costa",
    nomeCompleto: "Ana Beatriz Costa",
    idade: 15,
    dataNascimento: "2009-11-08",
    modalidade: "andebol",
    categoria: "Juvenis Femininos",
    numero: 9,
    posicao: "Central",
    foto: "/atletas/ana-costa.jpg",
    ativo: true,
    dataInscricao: "2020-09-01",
    anos_no_clube: 4,
    contacto: {
      telefone: "914567890",
      encarregado_educacao: {
        nome: "Carla Costa",
        telefone: "916789012",
        email: "carla.costa@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Rua do Sol, 789",
      codigo_postal: "2675-789",
      localidade: "Odivelas"
    },
    estatisticas: {
      jogos_realizados: 32,
      golos_marcados: 67,
      assistencias: 23,
      cartoes_amarelos: 3,
      cartoes_vermelhos: 0
    },
    conquistas: [
      "MVP do Campeonato Distrital Juvenis 2023",
      "Capitã da Seleção Distrital 2024",
      "1º Lugar Torneio de Páscoa 2024"
    ],
    nivel_competencia: "Alto Rendimento",
    horario_treino: ["Terça-feira 20:00-22:00", "Quinta-feira 20:00-22:00", "Sábado 10:00-12:00"]
  },

  // GINÁSTICA ARTÍSTICA
  {
    id: 4,
    nome: "Sofia",
    apelido: "Martins",
    nomeCompleto: "Sofia Isabel Martins",
    idade: 12,
    dataNascimento: "2012-05-17",
    modalidade: "ginastica",
    categoria: "Elementar Feminino",
    foto: "/atletas/sofia-martins.jpg",
    ativo: true,
    dataInscricao: "2019-09-01",
    anos_no_clube: 5,
    contacto: {
      encarregado_educacao: {
        nome: "Isabel Martins",
        telefone: "917890123",
        email: "isabel.martins@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Travessa da Paz, 234",
      codigo_postal: "2675-234",
      localidade: "Odivelas"
    },
    estatisticas: {
      pontuacao_media: 8.5,
      melhor_classificacao: "2º Lugar Regional"
    },
    conquistas: [
      "1º Lugar Torneio Regional de Ginástica 2023",
      "2º Lugar Campeonato Distrital 2024",
      "Ginasta do Ano GCO 2023"
    ],
    nivel_competencia: "Competição",
    horario_treino: ["Segunda-feira 18:30-20:30", "Quarta-feira 18:30-20:30", "Sexta-feira 18:00-20:00"]
  },
  {
    id: 5,
    nome: "Beatriz",
    apelido: "Ferreira",
    nomeCompleto: "Beatriz Maria Ferreira",
    idade: 8,
    dataNascimento: "2016-01-12",
    modalidade: "ginastica",
    categoria: "Iniciação Feminino",
    foto: "/atletas/beatriz-ferreira.jpg",
    ativo: true,
    dataInscricao: "2023-09-01",
    anos_no_clube: 1,
    contacto: {
      encarregado_educacao: {
        nome: "Ricardo Ferreira",
        telefone: "918901234",
        email: "ricardo.ferreira@email.com",
        parentesco: "Pai"
      }
    },
    endereco: {
      rua: "Rua Nova, 567",
      codigo_postal: "2675-567",
      localidade: "Odivelas"
    },
    conquistas: [
      "Participação no Festival de Ginástica 2024"
    ],
    nivel_competencia: "Iniciação",
    horario_treino: ["Terça-feira 17:30-19:00", "Quinta-feira 17:30-19:00"]
  },

  // PATINAGEM ARTÍSTICA
  {
    id: 6,
    nome: "Mariana",
    apelido: "Oliveira",
    nomeCompleto: "Mariana Sofia Oliveira",
    idade: 11,
    dataNascimento: "2013-09-03",
    modalidade: "patinagem-artistica",
    categoria: "Elementar Feminino",
    foto: "/atletas/mariana-oliveira.jpg",
    ativo: true,
    dataInscricao: "2021-09-01",
    anos_no_clube: 3,
    contacto: {
      encarregado_educacao: {
        nome: "Paula Oliveira",
        telefone: "919012345",
        email: "paula.oliveira@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Largo Central, 890",
      codigo_postal: "2675-890",
      localidade: "Odivelas"
    },
    estatisticas: {
      pontuacao_media: 7.8,
      melhor_classificacao: "3º Lugar Nacional"
    },
    conquistas: [
      "3º Lugar Campeonato Nacional Elementares 2024",
      "1º Lugar Troféu Regional 2023",
      "Melhor Programa Livre 2024"
    ],
    nivel_competencia: "Alto Rendimento",
    horario_treino: ["Terça-feira 19:00-21:00", "Quinta-feira 19:00-21:00", "Sábado 10:00-13:00"]
  },

  // XADREZ
  {
    id: 7,
    nome: "Diogo",
    apelido: "Pereira",
    nomeCompleto: "Diogo Miguel Pereira",
    idade: 10,
    dataNascimento: "2014-04-25",
    modalidade: "xadrez",
    categoria: "Sub-12",
    foto: "/atletas/diogo-pereira.jpg",
    ativo: true,
    dataInscricao: "2022-09-01",
    anos_no_clube: 2,
    contacto: {
      encarregado_educacao: {
        nome: "Miguel Pereira",
        telefone: "920123456",
        email: "miguel.pereira@email.com",
        parentesco: "Pai"
      }
    },
    endereco: {
      rua: "Rua dos Pinheiros, 345",
      codigo_postal: "2675-345",
      localidade: "Odivelas"
    },
    estatisticas: {
      pontuacao_media: 1250,
      melhor_classificacao: "5º Lugar Nacional Sub-12"
    },
    conquistas: [
      "Campeão Escolar de Odivelas 2024",
      "5º Lugar Campeonato Nacional Sub-12 2024",
      "1º Lugar Torneio Rápido GCO 2023"
    ],
    nivel_competencia: "Competição",
    horario_treino: ["Quarta-feira 17:30-18:30", "Sábado 10:00-11:00"]
  },
  {
    id: 8,
    nome: "Inês",
    apelido: "Rodrigues",
    nomeCompleto: "Inês Carolina Rodrigues",
    idade: 16,
    dataNascimento: "2008-12-10",
    modalidade: "xadrez",
    categoria: "Sub-18 Feminino",
    foto: "/atletas/ines-rodrigues.jpg",
    ativo: true,
    dataInscricao: "2018-09-01",
    anos_no_clube: 6,
    contacto: {
      telefone: "921234567",
      email: "ines.rodrigues@email.com",
      encarregado_educacao: {
        nome: "Ana Rodrigues",
        telefone: "922345678",
        email: "ana.rodrigues@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Avenida Principal, 678",
      codigo_postal: "2675-678",
      localidade: "Odivelas"
    },
    estatisticas: {
      pontuacao_media: 1680,
      melhor_classificacao: "Campeã Nacional Sub-16 Feminino"
    },
    conquistas: [
      "Campeã Nacional Sub-16 Feminino 2023",
      "2º Lugar Campeonato Nacional Sub-18 Feminino 2024",
      "Representação Internacional - Torneio Espanha 2024",
      "Mestre Candidata FIDE"
    ],
    nivel_competencia: "Alto Rendimento",
    horario_treino: ["Quinta-feira 19:00-21:00", "Sábado 14:00-17:00"]
  },

  // ATLETAS MAIS NOVOS - BABY GYM
  {
    id: 9,
    nome: "Tomás",
    apelido: "Almeida",
    nomeCompleto: "Tomás Rafael Almeida",
    idade: 4,
    dataNascimento: "2020-08-14",
    modalidade: "ginastica",
    categoria: "Baby Gym",
    foto: "/atletas/tomas-almeida.jpg",
    ativo: true,
    dataInscricao: "2024-01-15",
    anos_no_clube: 1,
    contacto: {
      encarregado_educacao: {
        nome: "Sandra Almeida",
        telefone: "923456789",
        email: "sandra.almeida@email.com",
        parentesco: "Mãe"
      }
    },
    endereco: {
      rua: "Rua da Alegria, 456",
      codigo_postal: "2675-456",
      localidade: "Odivelas"
    },
    conquistas: [
      "Participação no Festival Baby Gym 2024"
    ],
    nivel_competencia: "Iniciação",
    horario_treino: ["Segunda-feira 17:00-18:00", "Quarta-feira 17:00-18:00"]
  },

  // ANDEBOL - SENIORES
  {
    id: 10,
    nome: "Carlos",
    apelido: "Mendes",
    nomeCompleto: "Carlos Eduardo Mendes",
    idade: 24,
    dataNascimento: "2000-02-18",
    modalidade: "andebol",
    categoria: "Seniores Masculinos",
    numero: 15,
    posicao: "Pivot",
    foto: "/atletas/carlos-mendes.jpg",
    ativo: true,
    dataInscricao: "2015-09-01",
    anos_no_clube: 9,
    contacto: {
      telefone: "924567890",
      email: "carlos.mendes@email.com"
    },
    endereco: {
      rua: "Rua do Clube, 789",
      codigo_postal: "2675-789",
      localidade: "Odivelas"
    },
    estatisticas: {
      jogos_realizados: 156,
      golos_marcados: 234,
      assistencias: 78,
      cartoes_amarelos: 12,
      cartoes_vermelhos: 1
    },
    conquistas: [
      "Capitão da Equipa Sénior",
      "Melhor Marcador da Equipa 2023/2024",
      "10 anos de GCO (em breve)",
      "Formado no clube desde iniciados"
    ],
    observacoes: "Atleta formado no clube. Exemplo para os mais novos.",
    nivel_competencia: "Alto Rendimento",
    horario_treino: ["Terça-feira 20:00-22:00", "Quinta-feira 20:00-22:00", "Sábado 16:00-18:00"]
  }
];

// Funções auxiliares para trabalhar com os dados dos atletas

export function getAtletasByModalidade(modalidade: string): Atleta[] {
  return atletas.filter(atleta => atleta.modalidade === modalidade && atleta.ativo);
}

export function getAtletasByCategoria(categoria: string): Atleta[] {
  return atletas.filter(atleta => atleta.categoria === categoria && atleta.ativo);
}

export function getAtletaById(id: number): Atleta | undefined {
  return atletas.find(atleta => atleta.id === id);
}

export function getAtletasAtivos(): Atleta[] {
  return atletas.filter(atleta => atleta.ativo);
}

export function getAtletasByIdade(idadeMin: number, idadeMax: number): Atleta[] {
  return atletas.filter(atleta => 
    atleta.idade >= idadeMin && 
    atleta.idade <= idadeMax && 
    atleta.ativo
  );
}

export function getModalidadesComAtletas(): string[] {
  const modalidades = [...new Set(atletas.filter(a => a.ativo).map(a => a.modalidade))];
  return modalidades;
}

export function getCategoriasComAtletas(): string[] {
  const categorias = [...new Set(atletas.filter(a => a.ativo).map(a => a.categoria))];
  return categorias;
}

export function getEstatisticasGerais() {
  const atletasAtivos = getAtletasAtivos();
  
  return {
    totalAtletas: atletasAtivos.length,
    modalidades: getModalidadesComAtletas().length,
    categorias: getCategoriasComAtletas().length,
    idadeMedia: Math.round(atletasAtivos.reduce((sum, a) => sum + a.idade, 0) / atletasAtivos.length),
    veteranos: atletasAtivos.filter(a => a.anos_no_clube >= 5).length,
    novatos: atletasAtivos.filter(a => a.anos_no_clube <= 1).length
  };
}
