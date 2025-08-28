import { fetchModalidadeBySlug } from "@/data/modalidades-db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface ModalidadePageProps {
  params: { slug: string };
}


export default async function ModalidadePage({ params }: ModalidadePageProps) {
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(params.slug);
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
              </div>
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
