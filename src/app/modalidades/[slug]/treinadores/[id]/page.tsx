import { modalidades } from "@/data/modalidades";
import { getTreinadorById } from "@/data/treinadores";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface TreinadorPageProps {
  params: { slug: string; id: string };
}

export default function TreinadorDetalhePage({ params }: TreinadorPageProps) {
  const modalidade = modalidades.find((m) => m.slug === params.slug);
  const treinador = getTreinadorById(Number(params.id));

  if (!modalidade || !treinador) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header com foto e informações principais */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Foto do Treinador */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {treinador.foto ? (
                    <Image
                      src={treinador.foto}
                      alt={`Foto de ${treinador.nomeCompleto}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <span className="text-6xl text-blue-600">👤</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Informações Principais */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl font-bold mb-2">{treinador.nomeCompleto}</h1>
                <p className="text-xl text-blue-200 mb-4">{treinador.qualificacoes.nivel_treinador}</p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {treinador.experiencia.anos_experiencia} anos de experiência
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {treinador.anos_no_clube} anos no GCO
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {treinador.idade} anos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Coluna Esquerda */}
              <div className="space-y-6">
                {/* Informações Pessoais */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">👤</span>
                    Informações Pessoais
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <span className="font-medium">Data de Nascimento:</span> {new Date(treinador.dataNascimento).toLocaleDateString('pt-PT')}
                    </div>
                    <div>
                      <span className="font-medium">Modalidades:</span> {treinador.modalidades.join(', ')}
                    </div>
                    <div>
                      <span className="font-medium">Data de Início no GCO:</span> {new Date(treinador.dataInicio).toLocaleDateString('pt-PT')}
                    </div>
                    <div>
                      <span className="font-medium">Contacto:</span> {treinador.contacto.telefone}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {treinador.contacto.email}
                    </div>
                  </div>
                </div>

                {/* Categorias que treina */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🏃‍♂️</span>
                    Categorias que Treina
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {treinador.categorias.map((categoria, index) => (
                      <span key={index} className="px-3 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">
                        {categoria}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Estatísticas */}
                {treinador.estatisticas && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">📊</span>
                      Estatísticas
                    </h2>
                    <div className="grid grid-cols-3 gap-4">
                      {treinador.estatisticas.atletas_formados && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {treinador.estatisticas.atletas_formados}
                          </div>
                          <div className="text-sm text-gray-600">Atletas Formados</div>
                        </div>
                      )}
                      {treinador.estatisticas.titulos_conquistados && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-600">
                            {treinador.estatisticas.titulos_conquistados}
                          </div>
                          <div className="text-sm text-gray-600">Títulos</div>
                        </div>
                      )}
                      {treinador.estatisticas.anos_carreira && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {treinador.estatisticas.anos_carreira}
                          </div>
                          <div className="text-sm text-gray-600">Anos Carreira</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Coluna Direita */}
              <div className="space-y-6">
                {/* Qualificações */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">🎓</span>
                    Qualificações e Formação
                  </h2>
                  
                  {treinador.qualificacoes.formacao_academica && (
                    <div className="mb-4">
                      <h3 className="font-medium text-gray-700 mb-2">Formação Académica:</h3>
                      <p className="text-gray-600">{treinador.qualificacoes.formacao_academica}</p>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">Certificações:</h3>
                    <ul className="space-y-1">
                      {treinador.qualificacoes.certificacoes.map((cert, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {treinador.qualificacoes.cursos_especializacao.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Especializações:</h3>
                      <ul className="space-y-1">
                        {treinador.qualificacoes.cursos_especializacao.map((curso, index) => (
                          <li key={index} className="text-gray-600 flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            {curso}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Experiência */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">💼</span>
                    Experiência Profissional
                  </h2>
                  
                  {treinador.experiencia.clubes_anteriores && treinador.experiencia.clubes_anteriores.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-medium text-gray-700 mb-2">Clubes Anteriores:</h3>
                      <ul className="space-y-1">
                        {treinador.experiencia.clubes_anteriores.map((clube, index) => (
                          <li key={index} className="text-gray-600">• {clube}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="font-medium text-gray-700 mb-2">Especialidades:</h3>
                    <div className="flex flex-wrap gap-2">
                      {treinador.experiencia.especialidades.map((especialidade, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {especialidade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conquistas */}
            {treinador.experiencia.conquistas_como_treinador.length > 0 && (
              <div className="mt-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🏆</span>
                  Principais Conquistas como Treinador
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {treinador.experiencia.conquistas_como_treinador.map((conquista, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <span className="text-yellow-500 text-xl mr-3">🏆</span>
                      <span className="text-gray-700">{conquista}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Funções Adicionais */}
            {treinador.funcoes_adicionais.length > 0 && (
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">⭐</span>
                  Funções Adicionais no Clube
                </h2>
                <div className="flex flex-wrap gap-3">
                  {treinador.funcoes_adicionais.map((funcao, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">
                      {funcao}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Observações */}
            {treinador.observacoes && (
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📝</span>
                  Observações
                </h2>
                <p className="text-gray-700 leading-relaxed">{treinador.observacoes}</p>
              </div>
            )}
          </div>
          
          {/* Botão de Voltar */}
          <div className="p-8 border-t border-gray-200">
            <div className="flex justify-end">
              <Link
                href={`/modalidades/${modalidade.slug}/treinadores`}
                className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                &larr; Voltar aos treinadores
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
