export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  precoFormatado: string;
  categoria: 'Vestuário' | 'Equipamento' | 'Acessórios' | 'Serviços' | 'Modalidade Específica' | 'Clube';
  modalidade?: string; 
  imagem: string;
  imagemSecundaria?: string;
  slug: string;
  disponivel: boolean;
  stock?: number;
  stockIlimitado?: boolean; 
  tamanhos?: string[]; 
  cores?: string[]; 
  especificacoes?: {
    material?: string;
    peso?: string;
    dimensoes?: string;
    idade_recomendada?: string;
    unisex?: boolean;
  };
  caracteristicas?: string[];
  cuidados?: string[];
  prazoEntrega?: string;
  portes?: number;
  portesGratis?: boolean;
  promocao?: {
    ativa: boolean;
    desconto: number; 
    precoOriginal: number;
    validadeAte: string;
  };
  avaliacoes?: {
    media: number; 
    total: number;
  };
  tags?: string[];
  ativo: boolean;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "T-shirt Oficial GCO",
    descricao: "T-shirt oficial do Ginásio Clube de Odivelas em algodão 100% com logótipo bordado. Confortável e durável, ideal para o dia a dia ou atividades desportivas.",
    preco: 15.00,
    precoFormatado: "15,00 €",
    categoria: "Clube",
    imagem: "/produtos/tshirt-exemplo.jpg",
    slug: "t-shirt-oficial-gco",
    disponivel: true,
    stock: 45,
    tamanhos: ["XS", "S", "M", "L", "XL", "XXL"],
    cores: ["Azul GCO", "Branco", "Preto"],
    especificacoes: {
      material: "100% Algodão",
      unisex: true
    },
    caracteristicas: [
      "Logótipo bordado oficial do GCO",
      "Tecido respirável e confortável",
      "Corte moderno e ajustado",
      "Disponível em várias cores e tamanhos"
    ],
    cuidados: [
      "Lavar à máquina até 30°C",
      "Não usar lixívia",
      "Secar na horizontal",
      "Passar a ferro em temperatura baixa"
    ],
    prazoEntrega: "3-5 dias úteis",
    portes: 3.50,
    portesGratis: false,
    avaliacoes: {
      media: 4.7,
      total: 28
    },
    tags: ["oficial", "algodão", "logótipo", "casual"],
    ativo: true
  },
  {
    id: 2,
    nome: "Casaco Corta-Vento GCO",
    descricao: "Casaco corta-vento impermeável com capuz, perfeito para treinos ao ar livre e atividades desportivas. Design moderno com detalhes refletores.",
    preco: 30.00,
    precoFormatado: "30,00 €",
    categoria: "Clube",
    imagem: "/produtos/casaco-exemplo.jpg",
    slug: "casaco-corta-vento-gco",
    disponivel: true,
    stock: 22,
    tamanhos: ["S", "M", "L", "XL", "XXL"],
    cores: ["Azul GCO", "Preto"],
    especificacoes: {
      material: "Poliéster impermeável",
      peso: "280g",
      unisex: true
    },
    caracteristicas: [
      "Tecido impermeável e respirável",
      "Capuz ajustável com cordão",
      "Bolsos laterais com fecho",
      "Detalhes refletores para segurança",
      "Punhos elásticos",
      "Logótipo GCO aplicado"
    ],
    cuidados: [
      "Lavar à máquina até 40°C",
      "Não centrifugar",
      "Secar ao ar livre",
      "Não passar a ferro"
    ],
    prazoEntrega: "3-5 dias úteis",
    portes: 4.50,
    portesGratis: false,
    avaliacoes: {
      media: 4.5,
      total: 15
    },
    tags: ["impermeável", "desporto", "treino", "capuz"],
    ativo: true
  },

  {
    id: 3,
    nome: "Kimono de Karaté",
    descricao: "Kimono tradicional de karaté em algodão resistente, ideal para treinos e competições. Confeccionado segundo as normas internacionais da modalidade.",
    preco: 40.00,
    precoFormatado: "40,00 €",
    categoria: "Modalidade Específica",
    modalidade: "karate",
    imagem: "/produtos/kimono-exemplo.jpg",
    slug: "kimono-karate",
    disponivel: true,
    stock: 18,
    tamanhos: ["120cm", "130cm", "140cm", "150cm", "160cm", "170cm", "180cm", "190cm"],
    cores: ["Branco"],
    especificacoes: {
      material: "100% Algodão pesado (12oz)",
      peso: "650g",
      unisex: true
    },
    caracteristicas: [
      "Tecido 100% algodão de alta qualidade",
      "Corte tradicional japonês",
      "Reforços nas áreas de maior stress",
      "Inclui cinto branco",
      "Aprovado para competições oficiais",
      "Pré-encolhido"
    ],
    cuidados: [
      "Lavar à máquina até 30°C",
      "Primeiro uso: lavar separadamente",
      "Secar ao ar livre",
      "Passar a ferro se necessário"
    ],
    prazoEntrega: "5-7 dias úteis",
    portes: 5.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.8,
      total: 12
    },
    tags: ["karaté", "tradicional", "competição", "algodão"],
    ativo: true
  },
  {
    id: 4,
    nome: "Patins Artísticos",
    descricao: "Patins artísticos de iniciação com bota em couro sintético e chassis de alumínio. Ideais para os primeiros passos na patinagem artística.",
    preco: 85.00,
    precoFormatado: "85,00 €",
    categoria: "Modalidade Específica",
    modalidade: "patinagem-artistica",
    imagem: "/produtos/patins.jpg",
    slug: "patins-artisticos-iniciacao",
    disponivel: true,
    stock: 12,
    tamanhos: ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"],
    cores: ["Branco", "Preto"],
    especificacoes: {
      material: "Couro sintético + Chassis alumínio",
      peso: "1.2kg/par",
      idade_recomendada: "6+ anos"
    },
    caracteristicas: [
      "Bota em couro sintético resistente",
      "Chassis de alumínio leve",
      "Lâminas de aço carbono",
      "Forro acolchoado para conforto",
      "Sistema de atadura ajustável",
      "Adequados para iniciação e treino"
    ],
    cuidados: [
      "Secar bem após cada uso",
      "Guardar em local seco",
      "Verificar regularmente o aperto dos parafusos",
      "Afiar lâminas quando necessário"
    ],
    prazoEntrega: "7-10 dias úteis",
    portes: 6.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.3,
      total: 8
    },
    tags: ["patinagem", "iniciação", "artísticos", "treino"],
    ativo: true
  },

  {
    id: 5,
    nome: "Mochila Desportiva GCO",
    descricao: "Mochila spaciosa com vários compartimentos, ideal para transportar equipamento desportivo. Design ergonómico com alças acolchoadas.",
    preco: 25.00,
    precoFormatado: "25,00 €",
    categoria: "Acessórios",
    imagem: "/produtos/mochila.jpg",
    slug: "mochila-oficial-gco",
    disponivel: true,
    stock: 30,
    cores: ["Azul GCO", "Preto"],
    especificacoes: {
      material: "Poliéster 600D resistente à água",
      dimensoes: "45x30x20cm",
      peso: "650g"
    },
    caracteristicas: [
      "Capacidade: 27 litros",
      "Compartimento principal espaçoso",
      "Bolso frontal com organizador",
      "Compartimento lateral para garrafa",
      "Alças acolchoadas e ajustáveis",
      "Logótipo GCO bordado",
      "Resistente à água"
    ],
    cuidados: [
      "Limpeza com pano húmido",
      "Secar ao ar livre",
      "Não lavar na máquina",
      "Guardar em local seco"
    ],
    prazoEntrega: "3-5 dias úteis",
    portes: 4.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.6,
      total: 23
    },
    tags: ["mochila", "desporto", "transporte", "resistente"],
    ativo: true
  },

  {
    id: 6,
    nome: "Sapatilhas de Andebol",
    descricao: "Sapatilhas especializadas para andebol com sola antiderrapante e suporte lateral reforçado. Proporcionam aderência e estabilidade em pavimentos indoor.",
    preco: 55.00,
    precoFormatado: "55,00 €",
    categoria: "Modalidade Específica",
    modalidade: "andebol",
    imagem: "/produtos/patins.jpg",
    slug: "sapatilhas-andebol",
    disponivel: true,
    stock: 25,
    tamanhos: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    cores: ["Azul/Branco", "Preto/Branco"],
    especificacoes: {
      material: "Sintético + Borracha",
      peso: "320g (tamanho 42)",
      unisex: true
    },
    caracteristicas: [
      "Sola de borracha antiderrapante",
      "Suporte lateral reforçado",
      "Amortecimento no calcanhar",
      "Cabedal respirável",
      "Adequadas para pavimentos indoor",
      "Design específico para andebol"
    ],
    cuidados: [
      "Limpeza regular com pano húmido",
      "Secar ao ar livre",
      "Usar apenas em pavimentos limpos",
      "Alternar com outro par se possível"
    ],
    prazoEntrega: "5-7 dias úteis",
    portes: 5.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.4,
      total: 17
    },
    tags: ["andebol", "indoor", "aderência", "suporte"],
    ativo: true
  },
  {
    id: 7,
    nome: "Collant de Ginástica",
    descricao: "Collant profissional de ginástica em lycra elastizada com design elegante. Oferece liberdade de movimento e conforto durante os treinos e competições.",
    preco: 35.00,
    precoFormatado: "35,00 €",
    categoria: "Modalidade Específica",
    modalidade: "ginastica",
    imagem: "/produtos/tshirt-exemplo.jpg",
    slug: "collant-ginastica",
    disponivel: true,
    stock: 20,
    tamanhos: ["4-6 anos", "6-8 anos", "8-10 anos", "10-12 anos", "12-14 anos", "S", "M", "L"],
    cores: ["Azul GCO", "Rosa", "Roxo", "Preto"],
    especificacoes: {
      material: "80% Poliamida, 20% Elastano",
      peso: "150g",
      unisex: false
    },
    caracteristicas: [
      "Tecido elastizado de alta qualidade",
      "Corte anatómico para máxima liberdade",
      "Sem costuras laterais",
      "Aprovado para competições",
      "Secagem rápida",
      "Proteção UV"
    ],
    cuidados: [
      "Lavar à máquina até 30°C",
      "Não usar amaciador",
      "Secar à sombra",
      "Não passar a ferro"
    ],
    prazoEntrega: "5-7 dias úteis",
    portes: 3.50,
    portesGratis: false,
    avaliacoes: {
      media: 4.9,
      total: 31
    },
    tags: ["ginástica", "competição", "elastano", "conforto"],
    ativo: true
  },

  {
    id: 8,
    nome: "Inscrição de Sócio",
    descricao: "Torna-te sócio do Ginásio Clube de Odivelas e usufrui de todos os benefícios exclusivos, descontos e acesso prioritário às atividades do clube.",
    preco: 3.00,
    precoFormatado: "3,00 € (jóia) + 5,00 €/mês",
    categoria: "Clube",
    imagem: "/produtos/pinos.jpg",
    slug: "inscricao-socio",
    disponivel: true,
    stockIlimitado: true,
    especificacoes: {
      idade_recomendada: "Todas as idades"
    },
    caracteristicas: [
      "Cartão de sócio oficial",
      "Descontos em todas as modalidades",
      "Acesso prioritário a eventos",
      "Newsletter mensal exclusiva",
      "Descontos na loja oficial",
      "Participação em assembleias",
      "Quota mensal de 5,00€"
    ],
    prazoEntrega: "Imediato (cartão enviado em 5-7 dias)",
    portes: 0,
    portesGratis: true,
    avaliacoes: {
      media: 5.0,
      total: 156
    },
    tags: ["sócio", "desconto", "benefícios", "clube"],
    ativo: true
  },
  {
    id: 9,
    nome: "Aula Experimental",
    descricao: "Experimenta qualquer modalidade do clube com uma aula gratuita. Inclui orientação de treinador qualificado e equipamento básico se necessário.",
    preco: 0.00,
    precoFormatado: "Gratuito",
    categoria: "Serviços",
    imagem: "/produtos/mochila.jpg",
    slug: "aula-experimental",
    disponivel: true,
    stockIlimitado: true,
    especificacoes: {
      idade_recomendada: "Conforme modalidade"
    },
    caracteristicas: [
      "Aula gratuita de 60 minutos",
      "Orientação de treinador qualificado",
      "Equipamento básico incluído",
      "Avaliação inicial",
      "Informação sobre progressão",
      "Sem compromisso de inscrição",
      "Disponível para todas as modalidades"
    ],
    prazoEntrega: "Agendamento em 24-48h",
    portes: 0,
    portesGratis: true,
    avaliacoes: {
      media: 4.8,
      total: 89
    },
    tags: ["gratuito", "experimental", "modalidades", "avaliação"],
    ativo: true
  },

  {
    id: 10,
    nome: "Tabuleiro de Xadrez Oficial",
    descricao: "Tabuleiro de xadrez profissional com peças em madeira, conforme regulamentação FIDE. Ideal para treino e competições oficiais.",
    preco: 45.00,
    precoFormatado: "45,00 €",
    categoria: "Modalidade Específica",
    modalidade: "xadrez",
    imagem: "/produtos/pinos.jpg",
    slug: "tabuleiro-xadrez-oficial",
    disponivel: true,
    stock: 8,
    especificacoes: {
      material: "Madeira de faia + Feltro",
      dimensoes: "50x50cm",
      peso: "1.8kg"
    },
    caracteristicas: [
      "Tabuleiro dobrável 50x50cm",
      "Casas de 5.7cm conforme FIDE",
      "Peças Staunton em madeira",
      "Altura do rei: 9.5cm",
      "Base das peças em feltro",
      "Inclui saco de transporte",
      "Aprovado para competições oficiais"
    ],
    cuidados: [
      "Limpar com pano seco",
      "Evitar humidade excessiva",
      "Guardar em local seco",
      "Manter peças organizadas"
    ],
    prazoEntrega: "7-10 dias úteis",
    portes: 6.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.7,
      total: 14
    },
    tags: ["xadrez", "oficial", "FIDE", "competição"],
    ativo: true
  },

  {
    id: 11,
    nome: "Patins de Hóquei Profissionais",
    descricao: "Patins de hóquei em linha de alta qualidade com chassis de alumínio e rodas profissionais. Ideais para competições e treinos intensivos.",
    preco: 120.00,
    precoFormatado: "120,00 €",
    categoria: "Modalidade Específica",
    modalidade: "hoquei-patins",
    imagem: "/produtos/patins.jpg",
    slug: "patins-hoquei-profissionais",
    disponivel: true,
    stock: 8,
    tamanhos: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    cores: ["Preto/Azul", "Preto/Vermelho"],
    especificacoes: {
      material: "Couro sintético + Chassis alumínio",
      peso: "1.5kg/par",
      idade_recomendada: "12+ anos"
    },
    caracteristicas: [
      "Chassis de alumínio hi-lo",
      "4 rodas de 80mm + 76mm",
      "Rolamentos ABEC 7",
      "Bota anatómica em couro sintético",
      "Sistema de fecho rápido",
      "Adequados para competição",
      "Forro antibacteriano"
    ],
    cuidados: [
      "Secar bem após cada uso",
      "Verificar aperto dos parafusos",
      "Rodar as rodas regularmente",
      "Guardar em local seco"
    ],
    prazoEntrega: "7-10 dias úteis",
    portes: 8.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.6,
      total: 11
    },
    tags: ["hóquei", "patins", "competição", "profissional"],
    ativo: true
  },
  {
    id: 12,
    nome: "Stick de Hóquei em Patins",
    descricao: "Stick profissional de hóquei em patins em fibra de carbono, leve e resistente. Aprovado para competições oficiais.",
    preco: 45.00,
    precoFormatado: "45,00 €",
    categoria: "Modalidade Específica",
    modalidade: "hoquei-patins",
    imagem: "/produtos/pinos.jpg",
    slug: "stick-hoquei-patins",
    disponivel: true,
    stock: 15,
    especificacoes: {
      material: "Fibra de carbono",
      peso: "420g",
      dimensoes: "95cm comprimento"
    },
    caracteristicas: [
      "100% fibra de carbono",
      "Peso optimizado para velocidade",
      "Pega ergonómica antiderrapante",
      "Pala reforçada",
      "Aprovado pela FIRS",
      "Flex médio para versatilidade"
    ],
    cuidados: [
      "Evitar impactos desnecessários",
      "Verificar estado da pala",
      "Guardar em local seco",
      "Não expor a temperaturas extremas"
    ],
    prazoEntrega: "5-7 dias úteis",
    portes: 5.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.8,
      total: 9
    },
    tags: ["hóquei", "stick", "carbono", "competição"],
    ativo: true
  },

  // PRODUTOS ADICIONAIS DO CLUBE
  {
    id: 13,
    nome: "Sweat Oficial GCO",
    descricao: "Sweatshirt oficial do GCO em algodão misto com logótipo bordado. Confortável e ideal para o dia a dia dos adeptos.",
    preco: 35.00,
    precoFormatado: "35,00 €",
    categoria: "Clube",
    imagem: "/produtos/casaco-exemplo.jpg",
    slug: "sweat-oficial-gco",
    disponivel: true,
    stock: 30,
    tamanhos: ["XS", "S", "M", "L", "XL", "XXL"],
    cores: ["Azul GCO", "Cinzento", "Preto"],
    especificacoes: {
      material: "80% Algodão, 20% Poliéster",
      peso: "350g",
      unisex: true
    },
    caracteristicas: [
      "Logótipo GCO bordado",
      "Tecido misto confortável",
      "Corte regular",
      "Punhos e bainha canelados",
      "Capuz com cordão ajustável",
      "Bolso frontal tipo canguru"
    ],
    cuidados: [
      "Lavar à máquina até 30°C",
      "Não usar lixívia",
      "Secar ao ar livre",
      "Passar a ferro se necessário"
    ],
    prazoEntrega: "3-5 dias úteis",
    portes: 4.00,
    portesGratis: false,
    avaliacoes: {
      media: 4.5,
      total: 22
    },
    tags: ["clube", "sweat", "adepto", "casual"],
    ativo: true
  }
];


export function getProdutosByCategoria(categoria: string): Produto[] {
  return produtos.filter(produto => produto.categoria === categoria && produto.ativo);
}

export function getProdutosByModalidade(modalidade: string): Produto[] {
  return produtos.filter(produto => produto.modalidade === modalidade && produto.ativo);
}

export function getProdutoById(id: number): Produto | undefined {
  return produtos.find(produto => produto.id === id);
}

export function getProdutoBySlug(slug: string): Produto | undefined {
  return produtos.find(produto => produto.slug === slug && produto.ativo);
}

export function getProdutosAtivos(): Produto[] {
  return produtos.filter(produto => produto.ativo);
}

export function getProdutosDisponiveis(): Produto[] {
  return produtos.filter(produto => produto.disponivel && produto.ativo);
}

export function getProdutosComPromocao(): Produto[] {
  return produtos.filter(produto => 
    produto.promocao?.ativa && 
    produto.disponivel && 
    produto.ativo &&
    new Date(produto.promocao.validadeAte) > new Date()
  );
}

export function getProdutosByPreco(min: number, max: number): Produto[] {
  return produtos.filter(produto => 
    produto.preco >= min && 
    produto.preco <= max && 
    produto.ativo
  );
}

export function searchProdutos(termo: string): Produto[] {
  const termoLower = termo.toLowerCase();
  return produtos.filter(produto => 
    produto.ativo && (
      produto.nome.toLowerCase().includes(termoLower) ||
      produto.descricao.toLowerCase().includes(termoLower) ||
      produto.tags?.some(tag => tag.toLowerCase().includes(termoLower)) ||
      produto.modalidade?.toLowerCase().includes(termoLower)
    )
  );
}

export function getCategorias(): string[] {
  const categorias = [...new Set(produtos.filter(p => p.ativo).map(p => p.categoria))];
  return categorias;
}

export function getModalidadesComProdutos(): string[] {
  const modalidades = [...new Set(produtos.filter(p => p.ativo && p.modalidade).map(p => p.modalidade!))];
  return modalidades;
}

export function getEstatisticasProdutos() {
  const produtosAtivos = getProdutosAtivos();
  const produtosDisponiveis = getProdutosDisponiveis();
  const produtosComPromocao = getProdutosComPromocao();
  
  return {
    totalProdutos: produtosAtivos.length,
    produtosDisponiveis: produtosDisponiveis.length,
    produtosEmPromocao: produtosComPromocao.length,
    categorias: getCategorias().length,
    modalidadesComProdutos: getModalidadesComProdutos().length,
    produtosPorCategoria: {
      vestuario: produtosAtivos.filter(p => p.categoria === 'Vestuário').length,
      equipamento: produtosAtivos.filter(p => p.categoria === 'Equipamento').length,
      acessorios: produtosAtivos.filter(p => p.categoria === 'Acessórios').length,
      modalidadeEspecifica: produtosAtivos.filter(p => p.categoria === 'Modalidade Específica').length,
      servicos: produtosAtivos.filter(p => p.categoria === 'Serviços').length
    },
    precoMedio: produtosAtivos.reduce((sum, p) => sum + p.preco, 0) / produtosAtivos.length,
    avaliacaoMedia: produtosAtivos
      .filter(p => p.avaliacoes)
      .reduce((sum, p) => sum + p.avaliacoes!.media, 0) / 
      produtosAtivos.filter(p => p.avaliacoes).length
  };
}

export function getProdutosSemelhantes(produtoId: number, limite: number = 4): Produto[] {
  const produto = getProdutoById(produtoId);
  if (!produto) return [];
  
  return produtos
    .filter(p => 
      p.id !== produtoId && 
      p.ativo && 
      p.disponivel && 
      (p.categoria === produto.categoria || p.modalidade === produto.modalidade)
    )
    .slice(0, limite);
}
