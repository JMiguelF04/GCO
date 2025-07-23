import { modalidades } from "@/data/modalidades";
import { getAtletasByModalidade } from "@/data/atletas";
import { notFound } from "next/navigation";
import Link from "next/link";

interface AtletasPageProps {
  params: { slug: string };
}

export default function AtletasPage({ params }: AtletasPageProps) {
  const modalidade = modalidades.find(m => m.slug === params.slug);

  if (!modalidade) {
    notFound();
  }

  // Obter atletas reais da modalidade e ordenar por nome
  const atletasDaModalidade = getAtletasByModalidade(params.slug).sort((a, b) => 
    a.nomeCompleto.localeCompare(b.nomeCompleto)
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-black text-3xl font-bold mb-6">
          Atletas de {modalidade.nome}
        </h1>
        
        {atletasDaModalidade.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">
              Não há atletas inscritos nesta modalidade atualmente.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-grey-600 shadow rounded-lg">
              <thead>
                <tr className="bg-blue-900 text-left">
                  <th className="py-3 px-5 text-white">Nome</th>
                  <th className="py-3 px-4 text-white">Idade</th>
                  <th className="py-3 px-4 text-white">Categoria</th>
                  <th className="py-3 px-4 text-white">Posição</th>
                  <th className="py-3 px-4 text-white">Anos no Clube</th>
                  <th className="py-3 px-5 text-white text-center">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {atletasDaModalidade.map((atleta) => (
                  <tr key={atleta.id} className="border-t bg-gray-300 hover:bg-gray-200 transition-colors">
                    <td className="py-2 px-4 text-black font-medium">{atleta.nomeCompleto}</td>
                    <td className="py-2 px-4 text-black">{atleta.idade}</td>
                    <td className="py-2 px-4 text-black">{atleta.categoria}</td>
                    <td className="py-2 px-4 text-black">{atleta.posicao || "—"}</td>
                    <td className="py-2 px-4 text-black">{atleta.anos_no_clube} anos</td>
                    <td className="py-2 px-4 text-center">
                      <Link 
                        href={`/modalidades/${modalidade.slug}/atletas/${atleta.id}`} 
                        className="bg-blue-900 text-white hover:bg-blue-800 py-1 px-2 rounded-lg text-center transition-colors"
                      >
                        Ver →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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