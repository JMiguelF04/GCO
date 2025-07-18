import { modalidades } from "@/data/modalidades";
import { notFound } from "next/navigation";
import Link from "next/link";

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
];

interface AtletaPageProps {
  params: { slug: string; id: string };
}

export default function AtletaDetalhePage({ params }: AtletaPageProps) {
  const modalidade = modalidades.find((m) => m.slug === params.slug);
  const atleta = atletasExemplo.find((a) => a.id === Number(params.id));

  if (!modalidade || !atleta) {
    notFound();
  }''

  return (
    <main className="min-h-screen bg-gray-50 py-12 relative">
      <div className="mx-auto px-4 bg-white rounded-lg shadow p-8">
        <div className="flex items-start gap-230">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-blue-900">
              {atleta.nome}
            </h1>
            <ul className="mb-6 text-black text-lg">
              <li>
                <span className="font-semibold">Idade:</span> {atleta.idade}
              </li>
              <li>
                <span className="font-semibold">Posição:</span> {atleta.posicao}
              </li>
              <li>
                <span className="font-semibold">Modalidade:</span> {modalidade.nome}
              </li>
              <li>
                <span className="font-semibold">Peso:</span> 70 kg
              </li>
            </ul>
          </div>
          <img
            src="\imagem_atleta.png"
            alt={`Foto de ${atleta.nome}`}
            className="w-60 h-60 object-cover rounded-lg shadow"
          />
        </div>
        <Link
          href={`/modalidades/${modalidade.slug}/atletas`}
          className="text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-6 inline-block"
        >
          &larr; Voltar à lista de atletas
        </Link>
      </div>
    </main>
  );
}