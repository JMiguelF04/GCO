import { modalidades } from "@/data/modalidades";
import { getAtletaById } from "@/data/atletas";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface AtletaPageProps {
  params: { slug: string; id: string };
}

export default function AtletaDetalhePage({ params }: { params: { slug: string; id: string } }) {
  const modalidade = modalidades.find((m) => m.slug === params.slug);
  const atleta = getAtletaById(Number(params.id));

  if (!modalidade || !atleta) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Foto do Atleta */}
            <div className="flex-shrink-0">
              <div className="w-60 h-60 relative rounded-lg overflow-hidden shadow-lg">
                {atleta.foto ? (
                  <Image
                    src={atleta.foto}
                    alt={`Foto de ${atleta.nomeCompleto}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-4xl text-blue-600">👤</span>
                  </div>
                )}
              </div>
            </div>

            {/* Informações do Atleta */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-6 text-blue-900">
                {atleta.nomeCompleto}
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Dados Pessoais */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    Dados Pessoais
                  </h2>
                  <div className="space-y-3 text-black">
                    <div>
                      <span className="font-semibold text-gray-700">Idade:</span> {atleta.idade} anos
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Data de Nascimento:</span> {new Date(atleta.dataNascimento).toLocaleDateString('pt-PT')}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Modalidade:</span> {modalidade.nome}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Categoria:</span> {atleta.categoria}
                    </div>
                    {atleta.posicao && (
                      <div>
                        <span className="font-semibold text-gray-700">Posição:</span> {atleta.posicao}
                      </div>
                    )}
                    {atleta.numero && (
                      <div>
                        <span className="font-semibold text-gray-700">Número:</span> {atleta.numero}
                      </div>
                    )}
                  </div>
                </div>

                {/* Informações do Clube */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    No GCO
                  </h2>
                  <div className="space-y-3 text-black">
                    <div>
                      <span className="font-semibold text-gray-700">Anos no clube:</span> {atleta.anos_no_clube} anos
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Data de inscrição:</span> {new Date(atleta.dataInscricao).toLocaleDateString('pt-PT')}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Nível:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        atleta.nivel_competencia === 'Alto Rendimento' ? 'bg-red-100 text-red-800' :
                        atleta.nivel_competencia === 'Competição' ? 'bg-yellow-100 text-yellow-800' :
                        atleta.nivel_competencia === 'Formação' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {atleta.nivel_competencia}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Status:</span> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                        atleta.ativo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {atleta.ativo ? 'Ativo' : 'Inativo'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Estatísticas */}
              {atleta.estatisticas && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    Estatísticas
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {atleta.estatisticas.jogos_realizados && (
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-2xl text-blue-600">{atleta.estatisticas.jogos_realizados}</div>
                        <div className="text-sm text-gray-600">Jogos</div>
                      </div>
                    )}
                    {atleta.estatisticas.golos_marcados !== undefined && (
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-2xl text-green-600">{atleta.estatisticas.golos_marcados}</div>
                        <div className="text-sm text-gray-600">Golos</div>
                      </div>
                    )}
                    {atleta.estatisticas.assistencias && (
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-2xl text-purple-600">{atleta.estatisticas.assistencias}</div>
                        <div className="text-sm text-gray-600">Assistências</div>
                      </div>
                    )}
                    {atleta.estatisticas.pontuacao_media && (
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-bold text-2xl text-yellow-600">{atleta.estatisticas.pontuacao_media}</div>
                        <div className="text-sm text-gray-600">Média</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Conquistas */}
              {atleta.conquistas.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    Conquistas e Prémios
                  </h2>
                  <div className="space-y-2">
                    {atleta.conquistas.map((conquista, index) => (
                      <div key={index} className="flex items-center space-x-2 text-black">
                        <span className="text-yellow-500">🏆</span>
                        <span>{conquista}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Observações */}
              {atleta.observacoes && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    Observações
                  </h2>
                  <p className="text-black bg-gray-50 p-4 rounded-lg">
                    {atleta.observacoes}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Botão de Voltar */}
          <div className="flex justify-end mt-8">
            <Link
              href={`/modalidades/${modalidade.slug}/atletas`}
              className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              &larr; Voltar à lista de atletas
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}