import pool from "@/lib/mysql";

// Copia aqui a tua função fetchModalidadeBySlug e fetchTreinadorCompleto
export async function fetchModalidadeBySlug(slug: string) {
const [modalidades] = await pool.query<any[]>(
    "SELECT * FROM modalidades WHERE slug = ? LIMIT 1",
    [slug]
  );
  const modalidade = modalidades[0];
  if (!modalidade) return null;

  const [detalhes] = await pool.query<any[]>(
    "SELECT * FROM detalhes_modalidade WHERE modalidade_id = ? LIMIT 1",
    [modalidade.id]
  );
  modalidade.detalhes = detalhes[0] || {};

  const [niveis] = await pool.query<any[]>(
    "SELECT descricao FROM niveis WHERE modalidade_id = ?",
    [modalidade.id]
  );
  modalidade.niveis = niveis.map((n) => n.descricao);

  const [equipamento] = await pool.query<any[]>(
    "SELECT nome FROM equipamento WHERE modalidade_id = ?",
    [modalidade.id]
  );
  modalidade.equipamento = equipamento.map((e) => e.nome);

  const [competicoes] = await pool.query<any[]>(
    "SELECT nome FROM competicoes WHERE modalidade_id = ?",
    [modalidade.id]
  );
  modalidade.competicoes = competicoes.map((c) => c.nome);

  const [horarios] = await pool.query<any[]>(
    "SELECT dia, inicio, fim, nivel, grupo FROM horarios WHERE modalidade_id = ?",
    [modalidade.id]
  );
  modalidade.horarios = horarios;

  // 6. Buscar equipa técnica (treinadores)
  const [treinadores] = await pool.query<any[]>(
    "SELECT * FROM treinadores WHERE modalidade_id = ?",
    [modalidade.id]
  );
  modalidade.treinadores = await Promise.all(
    treinadores.map(async (treinador) => await fetchTreinadorCompleto(treinador))
  );

  const [precos] = await pool.query<any[]>(
    "SELECT mensalidade, inscricao, equipamento FROM preco WHERE modalidade_id = ? LIMIT 1",
    [modalidade.id]
  );
  modalidade.preco = precos[0] || {};

  const [contactos] = await pool.query<any[]>(
    "SELECT responsavel, telefone, email FROM contacto_modalidade WHERE modalidade_id = ? LIMIT 1",
    [modalidade.id]
  );
  modalidade.contacto = contactos[0] || {};

  return modalidade;
}


export async function fetchTreinadorCompleto(treinador: any) {
const [categorias] = await pool.query<any[]>(
    `SELECT c.nome FROM categorias c
     JOIN treinador_categoria tc ON tc.categoria_id = c.id
     WHERE tc.treinador_id = ?`,
    [treinador.id]
  );
  treinador.categorias = categorias.map((c) => c.nome);

  const [qualificacoes] = await pool.query<any[]>(
    "SELECT * FROM qualificacoes WHERE treinador_id = ? LIMIT 1",
    [treinador.id]
  );
  const qual = qualificacoes[0] || {};
  treinador.qualificacoes = {
    nivel_treinador: qual.nivel_treinador || "",
    formacao_academica: qual.formacao_academica || "",
    certificacoes: [],
    cursos_especializacao: [],
    licencas: [],
  };

  if (qual.id) {
    const [certificacoes] = await pool.query<any[]>(
      "SELECT nome_certificacao FROM certificacoes WHERE qualificacao_id = ?",
      [qual.id]
    );
    treinador.qualificacoes.certificacoes = certificacoes.map((c) => c.nome_certificacao);

    // Cursos de especialização
    const [cursos] = await pool.query<any[]>(
      "SELECT nome_curso FROM cursos_especializacao WHERE qualificacao_id = ?",
      [qual.id]
    );
    treinador.qualificacoes.cursos_especializacao = cursos.map((c) => c.nome_curso);

    // Licenças
    const [licencas] = await pool.query<any[]>(
      "SELECT nome_licenca, validade FROM licencas WHERE qualificacao_id = ?",
      [qual.id]
    );
    treinador.qualificacoes.licencas = licencas.map((l) => ({
      nome: l.nome_licenca,
      validade: l.validade,
    }));
  }

  // Experiência
  const [experiencias] = await pool.query<any[]>(
    "SELECT * FROM experiencia WHERE treinador_id = ? LIMIT 1",
    [treinador.id]
  );
  const exp = experiencias[0] || {};
  treinador.experiencia = {
    anos_experiencia: exp.anos_experiencia || 0,
    clubes_anteriores: [],
    conquistas_como_treinador: [],
    especialidades: [],
  };

  if (exp.id) {
    // Clubes anteriores
    const [clubes] = await pool.query<any[]>(
      "SELECT nome_clube, periodo FROM clubes_anteriores WHERE experiencia_id = ?",
      [exp.id]
    );
    treinador.experiencia.clubes_anteriores = clubes.map((c) => ({
      nome: c.nome_clube,
      periodo: c.periodo,
    }));

    // Conquistas
    const [conquistas] = await pool.query<any[]>(
      "SELECT descricao FROM conquistas WHERE experiencia_id = ?",
      [exp.id]
    );
    treinador.experiencia.conquistas_como_treinador = conquistas.map((c) => c.descricao);

    // Especialidades
    const [especialidades] = await pool.query<any[]>(
      "SELECT descricao FROM especialidades WHERE experiencia_id = ?",
      [exp.id]
    );
    treinador.experiencia.especialidades = especialidades.map((e) => e.descricao);
  }

  // Estatísticas
  const [estatisticas] = await pool.query<any[]>(
    "SELECT atletas_formados, titulos_conquistados, anos_carreira FROM estatisticas WHERE treinador_id = ? LIMIT 1",
    [treinador.id]
  );
  treinador.estatisticas = estatisticas[0] || {};

  // Funções
  const [funcoes] = await pool.query<any[]>(
    `SELECT f.descricao FROM funcoes f
     JOIN treinador_funcao tf ON tf.funcao_id = f.id
     WHERE tf.treinador_id = ?`,
    [treinador.id]
  );
  treinador.funcoes = funcoes.map((f) => f.descricao);

  return treinador;
}