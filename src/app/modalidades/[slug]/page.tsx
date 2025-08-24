import pool from "@/lib/mysql";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface ModalidadePageProps {
  params: { slug: string };
}

async function fetchModalidadeBySlug(slug: string) {
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

async function fetchTreinadorCompleto(treinador: any) {

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

export default async function ModalidadePage({ params }: ModalidadePageProps) {
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(slug);
  const treinadoresDaModalidade = modalidade.treinadores || [];

  if (!modalidade) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">
              Modalidades
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{modalidade.nome}</span>
          </div>
        </nav>

        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center">
                <div
                  className="bg-white rounded-xl mr-6 filter drop-shadow-lg flex items-center justify-center"
                  style={{ width: 100, height: 100 }}
                >
                  {modalidade.icone.startsWith("/") ? (
                    <Image
                      src={modalidade.icone}
                      alt={modalidade.nome}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-6xl">{modalidade.icone}</span>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    {modalidade.nome}
                  </h1>
                  <p className="text-xl text-blue-100 mb-3">
                    {modalidade.descricao}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-blue-500/30 px-3 py-1 rounded-full">
                      {modalidade.categoria}
                    </span>
                    <span className="bg-blue-500/30 px-3 py-1 rounded-full">
                      A partir dos {modalidade.idadeMinima} anos
                    </span>
                    {modalidade.ativo ? (
                      <span className="bg-green-500 px-3 py-1 rounded-full text-white font-medium">
                        ✓ Ativo
                      </span>
                    ) : (
                      <span className="bg-red-500 px-3 py-1 rounded-full text-white font-medium">
                        ⚠ Suspenso
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modalidade.ativo ? (
          <>
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Preços</h3>
                    <p className="text-sm text-gray-600">Valores mensais</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mensalidade:</span>
                    <span className="font-semibold text-black">{modalidade.preco.mensalidade}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inscrição:</span>
                    <span className="font-semibold text-black">{modalidade.preco.inscricao}€</span>
                  </div>
                  {modalidade.preco.equipamento && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Equipamento:</span>
                      <span className="font-semibold text-black">{modalidade.preco.equipamento}€</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Treinadores</h3>
                    <p className="text-sm text-gray-600">{treinadoresDaModalidade.length} profissiona{treinadoresDaModalidade.length == 1 ? 'l' : ''}{treinadoresDaModalidade.length !== 1 ? 'is' : ''}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {treinadoresDaModalidade.slice(0, 3).map((treinador) => (
                    <div key={treinador.id} className="text-sm">
                      <p className="font-medium text-white bg-blue-700 font-semibold text-center rounded-xl">{treinador.nome}</p>
                      <p className="text-gray-600 text-center">{treinador.qualificacoes.nivel_treinador}</p>
                      <p className="text-xs text-gray-500 text-center">{treinador.experiencia.anos_experiencia} anos de experiência</p>
                    </div>
                  ))}
                  {treinadoresDaModalidade.length > 3 && (
                    <p className="text-xs text-gray-500 mt-2">+ {treinadoresDaModalidade.length - 3} mais...</p>
                  )}
                  {treinadoresDaModalidade.length > 0 && (
                    <Link 
                      href={`/modalidades/${modalidade.slug}/treinadores`}
                      className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-block font-medium"
                    >
                      Ver todos os treinadores →
                    </Link>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Horários</h3>
                    <p className="text-sm text-gray-600 text-black">{modalidade.horarios.length} sessões/semana</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Vários horários disponíveis</p>
                  <p>Ver tabela completa abaixo</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Introdução */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre a Modalidade</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {modalidade.detalhes.introducao}
                  </p>
                </div>

                {/* Níveis */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Níveis Disponíveis</h2>
                  <div className="space-y-3">
                    {modalidade.niveis.map((nivel, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <span className="font-medium text-blue-900">{nivel}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Competições */}
                {modalidade.competicoes.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Competições</h2>
                    <div className="space-y-2">
                      {modalidade.competicoes.map((competicao, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-yellow-500 mr-2">🏆</span>
                          <span className="text-gray-700 text-sm">{competicao}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Equipamento */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipamento Necessário</h2>
                  <div className="space-y-2">
                    {modalidade.equipamento.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Metodologia */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodologia</h2>
                  <p className="text-gray-700 leading-relaxed">{modalidade.detalhes.metodologia}</p>
                </div>
                {/* Avaliação e Progressão */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Avaliação e Progressão</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Avaliação:</h3>
                      <p className="text-gray-700 text-sm">{modalidade.detalhes.avaliacao}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Progressão:</h3>
                      <p className="text-gray-700 text-sm">{modalidade.detalhes.progressao}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Horários */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Horários</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 font-semibold text-black">Dia</th>
                          <th className="text-left py-2 font-semibold text-black">Horário</th>
                          <th className="text-left py-2 font-semibold text-black">Nível</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modalidade.horarios.map((horario, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2 text-gray-900">{horario.dia}</td>
                            <td className="py-2 text-gray-700">{horario.inicio} - {horario.fim}</td>
                            <td className="py-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {horario.nivel}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Treinadores Detalhados */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipa Técnica</h2>
                  {treinadoresDaModalidade.length === 0 ? (
                    <p className="text-gray-600">Equipa técnica em formação.</p>
                  ) : (
                    <div className="space-y-6">
                      {treinadoresDaModalidade.map((treinador) => (
                        <div key={treinador.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                          <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                            {/* Foto do Treinador */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 relative rounded-lg overflow-hidden">
                                {treinador.foto ? (
                                  <Image
                                    src={treinador.foto}
                                    alt={`Foto de ${treinador.nome}`}
                                    fill
                                    className="object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <span className="text-2xl text-blue-600">👤</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Informações do Treinador */}
                            <div className="flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                                <h3 className="font-bold text-gray-900 text-lg">{treinador.nome}</h3>
                                <div className="flex gap-2 mt-2 lg:mt-0">
                                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                    {treinador.experiencia.anos_experiencia} anos
                                  </span>
                                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                    {treinador.anos_no_clube} anos no GCO
                                  </span>
                                </div>
                              </div>

                              <p className="text-gray-600 text-sm mb-3">{treinador.qualificacoes.nivel_treinador}</p>
                              
                              {/* Categorias que treina */}
                              <div className="mb-3">
                                <p className="text-sm font-medium text-gray-700 mb-1">Categorias:</p>
                                <div className="flex flex-wrap gap-1">
                                  {treinador.categorias.map((categoria, index) => (
                                    <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                                      {categoria}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Principais qualificações */}
                              <div className="mb-3">
                                <p className="text-sm font-medium text-gray-700 mb-1">Principais Qualificações:</p>
                                <ul className="space-y-1">
                                  {treinador.qualificacoes.certificacoes.slice(0, 3).map((qualificacao, qIndex) => (
                                    <li key={qIndex} className="text-sm text-gray-600 flex items-center">
                                      <span className="text-blue-500 mr-2">•</span>
                                      {qualificacao}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Especialidades */}
                              {treinador.experiencia.especialidades.length > 0 && (
                                <div className="mb-3">
                                  <p className="text-sm font-medium text-gray-700 mb-1">Especialidades:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {treinador.experiencia.especialidades.slice(0, 4).map((especialidade, index) => (
                                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                                        {especialidade}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Principais conquistas */}
                              {Array.isArray(treinador.experiencia.conquistas_como_treinador) && treinador.experiencia.conquistas_como_treinador.length > 0 && (
                                <div>
                                  <p className="text-sm font-medium text-gray-700 mb-1">Principais Conquistas:</p>
                                  <ul className="space-y-1">
                                    {treinador.experiencia.conquistas_como_treinador.slice(0, 2).map((conquista, cIndex) => (
                                      <li key={cIndex} className="text-sm text-gray-600 flex items-center">
                                        <span className="text-yellow-500 mr-2">🏆</span>
                                        {conquista}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>



            {/* Botões de Ação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Link
                href={`/modalidades/${modalidade.slug}/atletas`}
                className="bg-white border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">👥</span>
                Ver Atletas da Modalidade
              </Link>
              
              <Link
                href={`/modalidades/${modalidade.slug}/treinadores`}
                className="bg-white border-2 border-green-600 text-green-600 py-4 px-6 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <span className="mr-2">🎯</span>
                Ver Equipa Técnica
              </Link>
            </div>

            {/* Contacto e Inscrição */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mt-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Pronto para começar?</h2>
                <p className="text-blue-100">Junte-se a nós e descubra o seu potencial!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Informações de Contacto</h3>
                  <div className="space-y-2">
                    <p><strong>Responsável:</strong> {modalidade.contacto.responsavel}</p>
                    {modalidade.contacto.telefone && (
                      <p><strong>Telefone:</strong> {modalidade.contacto.telefone}</p>
                    )}
                    {modalidade.contacto.email && (
                      <p><strong>Email:</strong> {modalidade.contacto.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <Link
                    href="/inscricoes"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Inscrever-me Agora
                  </Link>
                  <p className="text-sm text-blue-100 mt-2">
                    Processo de inscrição simples e rápido
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Modalidade Suspensa */
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modalidade Temporariamente Suspensa</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Esta modalidade encontra-se temporariamente suspensa devido a questões regulamentares. 
              Estamos a trabalhar para retomar as atividades o mais breve possível.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-blue-900 mb-2">Interessado nesta modalidade?</h3>
              <p className="text-blue-700 mb-4">
                Pode registar o seu interesse e será contactado assim que as atividades forem retomadas.
              </p>
              <Link
                href="/contactos"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Registar Interesse
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              <p><strong>Contacto:</strong> {modalidade.contacto.responsavel}</p>
              {modalidade.contacto.email && (
                <p><strong>Email:</strong> {modalidade.contacto.email}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const { modalidades } = await import("@/data/modalidades");
  return modalidades.map((modalidade) => ({
    slug: modalidade.slug,
  }));
}
