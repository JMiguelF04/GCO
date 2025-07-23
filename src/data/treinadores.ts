export interface Treinador {
  id: number;
  nome: string;
  apelido: string;
  nomeCompleto: string;
  idade: number;
  dataNascimento: string;
  modalidades: string[];
  categorias: string[];
  foto?: string;
  ativo: boolean;
  dataInicio: string;
  anos_no_clube: number;
  contacto: {
    telefone: string;
    email: string;
    telefone_emergencia?: string;
  };
  endereco: {
    rua: string;
    codigo_postal: string;
    localidade: string;
  };
  qualificacoes: {
    nivel_treinador: string;
    certificacoes: string[];
    formacao_academica?: string;
    cursos_especializacao: string[];
    licencas_validas: string[];
  };
  experiencia: {
    anos_experiencia: number;
    clubes_anteriores?: string[];
    conquistas_como_treinador: string[];
    especialidades: string[];
  };
  horarios: {
    disponibilidade: string[];
    treinos_semanais: {
      dia: string;
      horario: string;
      categoria: string;
      modalidade: string;
    }[];
  };
  estatisticas?: {
    atletas_formados?: number;
    titulos_conquistados?: number;
    anos_carreira?: number;
  };
  observacoes?: string;
  funcoes_adicionais: string[];
  salario?: {
    tipo: 'Voluntário' | 'Remunerado' | 'Bolsa';
    valor_mensal?: number;
  };
}

export const treinadores: Treinador[] = [
  {
    id: 1,
    nome: "Ricardo",
    apelido: "Fernandes",
    nomeCompleto: "Ricardo Miguel Fernandes",
    idade: 42,
    dataNascimento: "1982-06-15",
    modalidades: ["andebol"],
    categorias: ["Seniores Masculinos", "Juvenis Masculinos"],
    foto: "/treinadores/ricardo-fernandes.jpg",
    ativo: true,
    dataInicio: "2018-09-01",
    anos_no_clube: 6,
    contacto: {
      telefone: "912345678",
      email: "ricardo.fernandes@gco.pt",
      telefone_emergencia: "213456789"
    },
    endereco: {
      rua: "Rua do Desporto, 123",
      codigo_postal: "2675-123",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Andebol Grau II",
      certificacoes: [
        "Treinador de Andebol Grau II - FAP",
        "Curso de Primeiros Socorros",
        "Formação em Psicologia Desportiva"
      ],
      formacao_academica: "Licenciatura em Educação Física e Desporto - FMH",
      cursos_especializacao: [
        "Treino de Alto Rendimento em Andebol",
        "Metodologia do Treino Juvenil",
        "Análise de Jogo em Andebol"
      ],
      licencas_validas: [
        "Licença FAP válida até 2025",
        "Certificado de Primeiros Socorros válido até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 15,
      clubes_anteriores: [
        "CD Póvoa (2015-2018)",
        "ABC Braga (2012-2015)",
        "Juventude de Viana (2009-2012)"
      ],
      conquistas_como_treinador: [
        "Campeão Distrital Juvenis Masculinos 2023",
        "2º Lugar Campeonato Nacional Juniores 2022",
        "Melhor Treinador do Distrito 2023"
      ],
      especialidades: [
        "Formação de jovens",
        "Sistemas defensivos",
        "Preparação física específica",
        "Análise táctica"
      ]
    },
    horarios: {
      disponibilidade: [
        "Segunda a Sexta: 18:00-22:00",
        "Sábado: 14:00-20:00",
        "Domingo: 09:00-13:00"
      ],
      treinos_semanais: [
        {
          dia: "Terça-feira",
          horario: "20:00-22:00",
          categoria: "Seniores Masculinos",
          modalidade: "andebol"
        },
        {
          dia: "Quinta-feira",
          horario: "20:00-22:00",
          categoria: "Seniores Masculinos",
          modalidade: "andebol"
        },
        {
          dia: "Sábado",
          horario: "16:00-18:00",
          categoria: "Seniores Masculinos",
          modalidade: "andebol"
        },
        {
          dia: "Segunda-feira",
          horario: "19:30-21:30",
          categoria: "Juvenis Masculinos",
          modalidade: "andebol"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 45,
      titulos_conquistados: 8,
      anos_carreira: 15
    },
    observacoes: "Coordenador técnico da modalidade de andebol. Responsável pela formação de treinadores juniores.",
    funcoes_adicionais: [
      "Coordenador Técnico de Andebol",
      "Responsável pela formação de treinadores",
      "Representante do clube na Associação"
    ],
    salario: {
      tipo: "Remunerado",
      valor_mensal: 800
    }
  },

  {
    id: 2,
    nome: "Sofia",
    apelido: "Carvalho",
    nomeCompleto: "Sofia Isabel Carvalho",
    idade: 35,
    dataNascimento: "1989-03-22",
    modalidades: ["andebol"],
    categorias: ["Juvenis Femininos", "Iniciadas Femininos"],
    foto: "/treinadores/sofia-carvalho.jpg",
    ativo: true,
    dataInicio: "2020-09-01",
    anos_no_clube: 4,
    contacto: {
      telefone: "913456789",
      email: "sofia.carvalho@gco.pt"
    },
    endereco: {
      rua: "Avenida da Liberdade, 456",
      codigo_postal: "2675-456",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Andebol Grau I",
      certificacoes: [
        "Treinador de Andebol Grau I - FAP",
        "Curso de Primeiros Socorros",
        "Formação em Treino Feminino"
      ],
      formacao_academica: "Licenciatura em Ciências do Desporto - ULHT",
      cursos_especializacao: [
        "Especificidades do Treino Feminino",
        "Psicologia do Desporto Juvenil"
      ],
      licencas_validas: [
        "Licença FAP válida até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 8,
      clubes_anteriores: [
        "Madeira SAD (2018-2020)",
        "Estrelas da Amadora (2016-2018)"
      ],
      conquistas_como_treinador: [
        "1º Lugar Torneio Regional Juvenis Femininos 2023",
        "Melhor treinadora jovem 2022"
      ],
      especialidades: [
        "Treino feminino",
        "Desenvolvimento técnico individual",
        "Motivação de equipas jovens"
      ]
    },
    horarios: {
      disponibilidade: [
        "Terça e Quinta: 19:00-22:00",
        "Sábado: 09:00-13:00"
      ],
      treinos_semanais: [
        {
          dia: "Terça-feira",
          horario: "20:00-22:00",
          categoria: "Juvenis Femininos",
          modalidade: "andebol"
        },
        {
          dia: "Quinta-feira",
          horario: "20:00-22:00",
          categoria: "Juvenis Femininos",
          modalidade: "andebol"
        },
        {
          dia: "Sábado",
          horario: "10:00-12:00",
          categoria: "Juvenis Femininos",
          modalidade: "andebol"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 28,
      titulos_conquistados: 3,
      anos_carreira: 8
    },
    funcoes_adicionais: [
      "Responsável pelo andebol feminino",
      "Coordenadora de eventos femininos"
    ],
    salario: {
      tipo: "Remunerado",
      valor_mensal: 500
    }
  },

  {
    id: 3,
    nome: "Mariana",
    apelido: "Sousa",
    nomeCompleto: "Mariana Alexandra Sousa",
    idade: 29,
    dataNascimento: "1995-11-08",
    modalidades: ["ginastica"],
    categorias: ["Elementar Feminino", "Iniciação Feminino", "Baby Gym"],
    foto: "/treinadores/mariana-sousa.jpg",
    ativo: true,
    dataInicio: "2019-09-01",
    anos_no_clube: 5,
    contacto: {
      telefone: "914567890",
      email: "mariana.sousa@gco.pt"
    },
    endereco: {
      rua: "Rua da Ginástica, 789",
      codigo_postal: "2675-789",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Ginástica Artística Grau II",
      certificacoes: [
        "Treinador de Ginástica Artística Grau II - FGP",
        "Especialização em Baby Gym",
        "Curso de Primeiros Socorros",
        "Formação em Desenvolvimento Motor Infantil"
      ],
      formacao_academica: "Licenciatura em Educação Física - UP",
      cursos_especializacao: [
        "Ginástica Artística Feminina",
        "Desenvolvimento Motor dos 3-6 anos",
        "Prevenção de Lesões em Ginástica"
      ],
      licencas_validas: [
        "Licença FGP válida até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 7,
      clubes_anteriores: [
        "Ginásio Clube Português (2017-2019)",
        "Sporting CP (2016-2017) - Estágio"
      ],
      conquistas_como_treinador: [
        "1º Lugar Regional Ginástica Artística 2023",
        "Melhor Programa de Baby Gym do Distrito 2022",
        "3 atletas qualificadas para Campeonatos Nacionais"
      ],
      especialidades: [
        "Ginástica artística feminina",
        "Baby Gym (3-6 anos)",
        "Desenvolvimento da flexibilidade",
        "Coreografia e expressão corporal"
      ]
    },
    horarios: {
      disponibilidade: [
        "Segunda, Quarta, Sexta: 17:00-21:00",
        "Terça, Quinta: 17:00-20:00"
      ],
      treinos_semanais: [
        {
          dia: "Segunda-feira",
          horario: "18:30-20:30",
          categoria: "Elementar Feminino",
          modalidade: "ginastica"
        },
        {
          dia: "Quarta-feira",
          horario: "18:30-20:30",
          categoria: "Elementar Feminino",
          modalidade: "ginastica"
        },
        {
          dia: "Sexta-feira",
          horario: "18:00-20:00",
          categoria: "Elementar Feminino",
          modalidade: "ginastica"
        },
        {
          dia: "Terça-feira",
          horario: "17:30-19:00",
          categoria: "Iniciação Feminino",
          modalidade: "ginastica"
        },
        {
          dia: "Segunda-feira",
          horario: "17:00-18:00",
          categoria: "Baby Gym",
          modalidade: "ginastica"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 65,
      titulos_conquistados: 12,
      anos_carreira: 7
    },
    observacoes: "Especialista em desenvolvimento motor infantil. Ex-ginasta do Sporting CP.",
    funcoes_adicionais: [
      "Coordenadora de Ginástica Artística",
      "Responsável pelo programa Baby Gym",
      "Formadora de monitores"
    ],
    salario: {
      tipo: "Remunerado",
      valor_mensal: 650
    }
  },

  // PATINAGEM ARTÍSTICA
  {
    id: 4,
    nome: "Carolina",
    apelido: "Ribeiro",
    nomeCompleto: "Carolina Beatriz Ribeiro",
    idade: 32,
    dataNascimento: "1992-07-14",
    modalidades: ["patinagem-artistica"],
    categorias: ["Elementar Feminino", "Iniciação", "Competição"],
    foto: "/treinadores/carolina-ribeiro.jpg",
    ativo: true,
    dataInicio: "2021-09-01",
    anos_no_clube: 3,
    contacto: {
      telefone: "915678901",
      email: "carolina.ribeiro@gco.pt"
    },
    endereco: {
      rua: "Rua dos Patins, 321",
      codigo_postal: "2675-321",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Patinagem Artística Grau I",
      certificacoes: [
        "Treinador de Patinagem Artística Grau I - FPP",
        "Juiz Regional de Patinagem Artística",
        "Curso de Primeiros Socorros"
      ],
      formacao_academica: "Licenciatura em Desporto e Bem-Estar - IPL",
      cursos_especializacao: [
        "Técnica de Patinagem Artística",
        "Coreografia em Patins",
        "Preparação para Competições"
      ],
      licencas_validas: [
        "Licença FPP válida até 2025",
        "Cartão de Juiz válido até 2024"
      ]
    },
    experiencia: {
      anos_experiencia: 6,
      clubes_anteriores: [
        "Hóquei Clube de Sintra (2019-2021)",
        "Sport Lisboa e Benfica (2017-2019)"
      ],
      conquistas_como_treinador: [
        "3º Lugar Campeonato Nacional Elementares 2024",
        "1º Lugar Troféu Regional 2023",
        "Melhor Programa Livre Regional 2024"
      ],
      especialidades: [
        "Patinagem artística feminina",
        "Técnica de saltos",
        "Expressão e interpretação",
        "Preparação para competições"
      ]
    },
    horarios: {
      disponibilidade: [
        "Terça, Quinta: 18:00-22:00",
        "Sábado: 09:00-14:00"
      ],
      treinos_semanais: [
        {
          dia: "Terça-feira",
          horario: "19:00-21:00",
          categoria: "Elementar Feminino",
          modalidade: "patinagem-artistica"
        },
        {
          dia: "Quinta-feira",
          horario: "19:00-21:00",
          categoria: "Elementar Feminino",
          modalidade: "patinagem-artistica"
        },
        {
          dia: "Sábado",
          horario: "10:00-13:00",
          categoria: "Elementar Feminino",
          modalidade: "patinagem-artistica"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 22,
      titulos_conquistados: 6,
      anos_carreira: 6
    },
    observacoes: "Ex-atleta internacional de patinagem artística. Especialista em preparação para competições nacionais.",
    funcoes_adicionais: [
      "Responsável pela patinagem artística",
      "Juiz em competições regionais",
      "Coreógrafa oficial do clube"
    ],
    salario: {
      tipo: "Remunerado",
      valor_mensal: 400
    }
  },

  // XADREZ
  {
    id: 5,
    nome: "Miguel",
    apelido: "Santos",
    nomeCompleto: "Miguel Ângelo Santos",
    idade: 45,
    dataNascimento: "1979-12-03",
    modalidades: ["xadrez"],
    categorias: ["Sub-12", "Sub-16", "Sub-18", "Seniores"],
    foto: "/treinadores/miguel-santos.jpg",
    ativo: true,
    dataInicio: "2015-09-01",
    anos_no_clube: 9,
    contacto: {
      telefone: "916789012",
      email: "miguel.santos@gco.pt"
    },
    endereco: {
      rua: "Rua do Rei, 654",
      codigo_postal: "2675-654",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Xadrez Grau II",
      certificacoes: [
        "Treinador de Xadrez Grau II - FPX",
        "Árbitro Nacional de Xadrez",
        "Mestre FIDE"
      ],
      formacao_academica: "Mestrado em Matemática - FC-UL",
      cursos_especializacao: [
        "Psicologia Aplicada ao Xadrez",
        "Análise de Partidas com Software",
        "Metodologia do Ensino de Xadrez"
      ],
      licencas_validas: [
        "Licença FPX válida até 2025",
        "Cartão de Árbitro válido até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 20,
      clubes_anteriores: [
        "Xeque-Mate Lisboa (2010-2015)",
        "Casa do Benfica de Almada (2005-2010)"
      ],
      conquistas_como_treinador: [
        "Campeão Nacional Sub-16 Feminino 2023 (Inês Rodrigues)",
        "5º Lugar Nacional Sub-12 2024 (Diogo Pereira)",
        "Múltiplos títulos escolares e regionais"
      ],
      especialidades: [
        "Formação de jovens enxadristas",
        "Análise posicional",
        "Preparação psicológica",
        "Xadrez competitivo"
      ]
    },
    horarios: {
      disponibilidade: [
        "Quarta: 17:00-22:00",
        "Sábado: 09:00-18:00"
      ],
      treinos_semanais: [
        {
          dia: "Quarta-feira",
          horario: "17:30-18:30",
          categoria: "Sub-12",
          modalidade: "xadrez"
        },
        {
          dia: "Quinta-feira",
          horario: "19:00-21:00",
          categoria: "Sub-18",
          modalidade: "xadrez"
        },
        {
          dia: "Sábado",
          horario: "10:00-11:00",
          categoria: "Sub-12",
          modalidade: "xadrez"
        },
        {
          dia: "Sábado",
          horario: "14:00-17:00",
          categoria: "Sub-18",
          modalidade: "xadrez"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 85,
      titulos_conquistados: 25,
      anos_carreira: 20
    },
    observacoes: "Mestre FIDE com rating de 2350. Matemático de formação, aplica métodos analíticos ao ensino do xadrez.",
    funcoes_adicionais: [
      "Coordenador de Xadrez",
      "Árbitro em torneios nacionais",
      "Responsável pela escola de xadrez do clube"
    ],
    salario: {
      tipo: "Remunerado",
      valor_mensal: 300
    }
  },

  // TREINADOR ASSISTENTE / ANDEBOL INICIADOS
  {
    id: 6,
    nome: "João",
    apelido: "Oliveira",
    nomeCompleto: "João Pedro Oliveira",
    idade: 26,
    dataNascimento: "1998-04-17",
    modalidades: ["andebol"],
    categorias: ["Iniciados Masculinos", "Infantis Masculinos"],
    foto: "/treinadores/joao-oliveira.jpg",
    ativo: true,
    dataInicio: "2023-09-01",
    anos_no_clube: 1,
    contacto: {
      telefone: "917890123",
      email: "joao.oliveira@gco.pt"
    },
    endereco: {
      rua: "Rua Jovem, 987",
      codigo_postal: "2675-987",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Treinador de Andebol Grau I",
      certificacoes: [
        "Treinador de Andebol Grau I - FAP",
        "Curso de Primeiros Socorros",
        "Monitor de Desporto Escolar"
      ],
      formacao_academica: "Licenciatura em Educação Física - FMH (em curso)",
      cursos_especializacao: [
        "Iniciação ao Andebol",
        "Metodologia do Treino Infantil"
      ],
      licencas_validas: [
        "Licença FAP válida até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 3,
      conquistas_como_treinador: [
        "2º Lugar Torneio Escolar Iniciados 2024"
      ],
      especialidades: [
        "Formação de base",
        "Motivação de jovens atletas",
        "Ensino de fundamentos técnicos"
      ]
    },
    horarios: {
      disponibilidade: [
        "Segunda, Quarta, Sexta: 19:00-22:00"
      ],
      treinos_semanais: [
        {
          dia: "Segunda-feira",
          horario: "19:30-21:30",
          categoria: "Iniciados Masculinos",
          modalidade: "andebol"
        },
        {
          dia: "Quarta-feira",
          horario: "19:30-21:30",
          categoria: "Iniciados Masculinos",
          modalidade: "andebol"
        },
        {
          dia: "Sexta-feira",
          horario: "19:30-21:30",
          categoria: "Iniciados Masculinos",
          modalidade: "andebol"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 15,
      anos_carreira: 3
    },
    observacoes: "Ex-atleta do clube. Estudante de Educação Física em final de curso.",
    funcoes_adicionais: [
      "Assistente técnico",
      "Responsável pelos iniciados masculinos"
    ],
    salario: {
      tipo: "Bolsa",
      valor_mensal: 200
    }
  },

  // VOLUNTÁRIA - GINÁSTICA BABY GYM
  {
    id: 7,
    nome: "Patrícia",
    apelido: "Costa",
    nomeCompleto: "Patrícia Maria Costa",
    idade: 38,
    dataNascimento: "1986-09-25",
    modalidades: ["ginastica"],
    categorias: ["Baby Gym"],
    foto: "/treinadores/patricia-costa.jpg",
    ativo: true,
    dataInicio: "2022-01-15",
    anos_no_clube: 2,
    contacto: {
      telefone: "918901234",
      email: "patricia.costa@gco.pt"
    },
    endereco: {
      rua: "Rua das Crianças, 123",
      codigo_postal: "2675-123",
      localidade: "Odivelas"
    },
    qualificacoes: {
      nivel_treinador: "Monitor de Baby Gym",
      certificacoes: [
        "Monitor de Baby Gym - FGP",
        "Curso de Primeiros Socorros Pediátricos",
        "Animação Infantil"
      ],
      formacao_academica: "Licenciatura em Educação de Infância - ESE",
      cursos_especializacao: [
        "Desenvolvimento Motor 0-6 anos",
        "Psicomotricidade Infantil"
      ],
      licencas_validas: [
        "Certificado Baby Gym válido até 2025"
      ]
    },
    experiencia: {
      anos_experiencia: 5,
      especialidades: [
        "Trabalho com crianças dos 3-6 anos",
        "Desenvolvimento psicomotor",
        "Atividades lúdicas",
        "Coordenação motora"
      ]
    },
    horarios: {
      disponibilidade: [
        "Segunda, Quarta: 17:00-19:00"
      ],
      treinos_semanais: [
        {
          dia: "Segunda-feira",
          horario: "17:00-18:00",
          categoria: "Baby Gym",
          modalidade: "ginastica"
        },
        {
          dia: "Quarta-feira",
          horario: "17:00-18:00",
          categoria: "Baby Gym",
          modalidade: "ginastica"
        }
      ]
    },
    estatisticas: {
      atletas_formados: 30,
      anos_carreira: 5
    },
    observacoes: "Mãe de atleta do clube. Educadora de infância profissional. Trabalho voluntário.",
    funcoes_adicionais: [
      "Assistente de Baby Gym",
      "Apoio em eventos infantis"
    ],
    salario: {
      tipo: "Voluntário"
    }
  }
];

// Funções auxiliares para trabalhar com os dados dos treinadores

export function getTreinadoresByModalidade(modalidade: string): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.modalidades.includes(modalidade) && treinador.ativo
  );
}

export function getTreinadoresByCategoria(categoria: string): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.categorias.includes(categoria) && treinador.ativo
  );
}

export function getTreinadorById(id: number): Treinador | undefined {
  return treinadores.find(treinador => treinador.id === id);
}

export function getTreinadoresAtivos(): Treinador[] {
  return treinadores.filter(treinador => treinador.ativo);
}

export function getTreinadoresRemunerados(): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.salario?.tipo === "Remunerado" && treinador.ativo
  );
}

export function getTreinadoresVoluntarios(): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.salario?.tipo === "Voluntário" && treinador.ativo
  );
}

export function getModalidadesComTreinadores(): string[] {
  const modalidades = [...new Set(
    treinadores
      .filter(t => t.ativo)
      .flatMap(t => t.modalidades)
  )];
  return modalidades;
}

export function getTreinadoresPorExperiencia(anosMin: number): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.experiencia.anos_experiencia >= anosMin && treinador.ativo
  );
}

export function getTreinadoresPorHorario(dia: string): Treinador[] {
  return treinadores.filter(treinador => 
    treinador.horarios.treinos_semanais.some(treino => treino.dia === dia) && 
    treinador.ativo
  );
}

export function getEstatisticasTreinadores() {
  const treinadoresAtivos = getTreinadoresAtivos();
  
  const totalSalarios = treinadoresAtivos
    .filter(t => t.salario?.valor_mensal)
    .reduce((sum, t) => sum + (t.salario?.valor_mensal || 0), 0);
  
  return {
    totalTreinadores: treinadoresAtivos.length,
    modalidadesCoberturas: getModalidadesComTreinadores().length,
    treinadoresRemunerados: getTreinadoresRemunerados().length,
    treinadoresVoluntarios: getTreinadoresVoluntarios().length,
    experienciaMedia: Math.round(
      treinadoresAtivos.reduce((sum, t) => sum + t.experiencia.anos_experiencia, 0) / 
      treinadoresAtivos.length
    ),
    idadeMedia: Math.round(
      treinadoresAtivos.reduce((sum, t) => sum + t.idade, 0) / 
      treinadoresAtivos.length
    ),
    custoMensalTotal: totalSalarios,
    atletasFormadosTotal: treinadoresAtivos.reduce((sum, t) => sum + (t.estatisticas?.atletas_formados || 0), 0),
    veteranos: treinadoresAtivos.filter(t => t.anos_no_clube >= 5).length
  };
}
