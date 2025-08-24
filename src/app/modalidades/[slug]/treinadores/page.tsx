import { fetchModalidadeBySlug } from "@/data/modalidades-db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface TreinadoresPageProps {
  params: { slug: string };
}

export default async function TreinadoresPage({ params }: TreinadoresPageProps) {
  const modalidade = await fetchModalidadeBySlug(params.slug);
  const treinadoresDaModalidade = modalidade.treinadores || [];

  if (!modalidade) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-black text-3xl font-bold mb-6">
          Treinadores de {modalidade.nome}
        </h1>
        
        {treinadoresDaModalidade.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">
              Equipa técnica em formação para esta modalidade.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treinadoresDaModalidade.map((treinador) => (
              <div key={treinador.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Foto do Treinador */}
                <div className="h-48 relative bg-gradient-to-br from-blue-100 to-blue-200">
                  {treinador.foto ? (
                    <Image
                      src={treinador.foto}
                      alt={`Foto de ${treinador.nome}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl text-blue-600">👤</span>
                    </div>
                  )}
                </div>

                {/* Informações do Treinador */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {treinador.nome}
                  </h2>
                  
                  <p className="text-blue-600 font-medium mb-3">
                    {treinador.qualificacoes.nivel_treinador}
                  </p>

                  {/* Badges de Experiência */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {treinador.experiencia.anos_experiencia} anos experiência
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {treinador.anos_no_clube} anos no GCO
                    </span>
                  </div>

                  {/* Categorias */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Categorias:</p>
                    <div className="flex flex-wrap gap-1">
                      {treinador.categorias.slice(0, 3).map((categoria, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          {categoria}
                        </span>
                      ))}
                      {treinador.categorias.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{treinador.categorias.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Principais Especialidades */}
                  {treinador.experiencia.especialidades.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Especialidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {treinador.experiencia.especialidades.slice(0, 2).map((especialidade, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                            {especialidade}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Estatísticas */}
                  {treinador.estatisticas && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {treinador.estatisticas.atletas_formados && (
                        <div className="text-center">
                          <div className="font-bold text-lg text-blue-600">
                            {treinador.estatisticas.atletas_formados}
                          </div>
                          <div className="text-xs text-gray-600">Atletas formados</div>
                        </div>
                      )}
                      {treinador.estatisticas.titulos_conquistados && (
                        <div className="text-center">
                          <div className="font-bold text-lg text-yellow-600">
                            {treinador.estatisticas.titulos_conquistados}
                          </div>
                          <div className="text-xs text-gray-600">Títulos</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Botão Ver Detalhes */}
                  <Link
                    href={`/modalidades/${modalidade.slug}/treinadores/${treinador.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
                  >
                    Ver Detalhes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-end mt-8">
          <Link
            href={`/modalidades/${modalidade.slug}`}
            className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            &larr; Voltar à modalidade
          </Link>
        </div>
      </div>
    </main>
  );
}
