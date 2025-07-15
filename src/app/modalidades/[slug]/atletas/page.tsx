import { modalidades } from "@/data/modalidades";
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

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-black text-3xl font-bold mb-6">
          Atletas de {modalidade.nome}
        </h1>
        <ul className="space-y-2">
          {modalidade.atletas && modalidade.atletas.length > 0 ? (
            modalidade.atletas.map((atleta: any) => (
              <li key={atleta.id} className="bg-white rounded shadow p-4">
                <span className="font-semibold">{atleta.nome}</span>
                {/* Outros dados do atleta, se existirem */}
              </li>
            ))
          ) : (
            <li className="text-gray-500">Sem atletas registados.</li>
          )}
        </ul>
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