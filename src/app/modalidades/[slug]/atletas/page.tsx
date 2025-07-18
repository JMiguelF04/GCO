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

  // Ordenar atletas por nome (ordem alfabética)
  const atletasExemplo = [
    { id: 1, nome: "João Silva", idade: 22, posicao: "Avançado" },
    { id: 2, nome: "Mario Costa", idade: 19, posicao: "Defesa" },
    { id: 3, nome: "Carlos Pinto", idade: 25, posicao: "Guarda-Redes" },
    { id: 4, nome: "André Lopes", idade: 21, posicao: "Médio" },
    { id: 5, nome: "Pedro Martins", idade: 23, posicao: "Avançado" },
    { id: 6, nome: "Ricardo Sousa", idade: 20, posicao: "Defesa" },
    { id: 7, nome: "Bruno Ferreira", idade: 24, posicao: "Médio" },
    { id: 8, nome: "Miguel Rocha", idade: 22, posicao: "Guarda-Redes" },
    { id: 9, nome: "Tiago Ramos", idade: 21, posicao: "Avançado" },
    { id: 10, nome: "Fábio Almeida", idade: 26, posicao: "Defesa" },
    { id: 11, nome: "Hugo Moreira", idade: 27, posicao: "Médio" },
    { id: 12, nome: "Diogo Fonseca", idade: 20, posicao: "Avançado" },
    { id: 13, nome: "Rui Mendes", idade: 23, posicao: "Defesa" },
    { id: 14, nome: "Paulo Teixeira", idade: 25, posicao: "Guarda-Redes" },
    { id: 15, nome: "Alexandre Cruz", idade: 22, posicao: "Médio" },
    { id: 16, nome: "Gonçalo Pires", idade: 24, posicao: "Avançado" },
    { id: 17, nome: "Vítor Carvalho", idade: 28, posicao: "Defesa" },
    { id: 18, nome: "Eduardo Matos", idade: 21, posicao: "Médio" },
    { id: 19, nome: "Samuel Lopes", idade: 23, posicao: "Guarda-Redes" },
    { id: 20, nome: "Luís Figueiredo", idade: 25, posicao: "Avançado" },
  ].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-black text-3xl font-bold mb-6">
          Atletas de {modalidade.nome}
        </h1>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full bg-grey-600 shadow rounded-lg">
            <thead>
              <tr className="bg-blue-900 text-left">
                <th className="py-3 px-4">Nome</th>
                <th className="py-3 px-4">Idade</th>
                <th className="py-3 px-4">Posição</th>
                <th>    </th>
              </tr>
            </thead>
            <tbody>
              {atletasExemplo.map((atleta) => (
                <tr key={atleta.id} className="border-t bg-gray-300">
                  <td className="py-2 px-4 text-black">{atleta.nome}</td>
                  <td className="py-2 px-4 text-black">{atleta.idade ?? "—"}</td>
                  <td className="py-2 px-4 text-black">{atleta.posicao ?? "—"}</td>
                  <td className="py-2 px-4 text-center">
                  <Link href={`/modalidades/${modalidade.slug}/atletas/${atleta.id}`} className="bg-blue-900 text-yellow-1000 hover:bg-gray-500 py-1 px-3 rounded-lg text-center transition-colors">→</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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