import { Modalidade } from "@/data/modalidades";
import Link from "next/link";

interface ModalidadeCardProps {
  modalidade: Modalidade;
}

export default function ModalidadeCard({ modalidade }: ModalidadeCardProps) {
  const { nome, icone, descricao, ativo } = modalidade;
  
  return (
    <div
      className={`rounded-xl p-6 hover:shadow-lg transition-all duration-300 border relative ${
        ativo 
          ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:-translate-y-2' 
          : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 opacity-75'
      }`}
    >
      {!ativo && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          SUSPENSO
        </div>
      )}
      <div className={`text-4xl mb-4 ${!ativo ? 'filter grayscale' : ''}`}>
        {icone}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${
        ativo ? 'text-blue-900' : 'text-gray-600'
      }`}>
        {nome}
      </h3>
      <p className={`mb-4 ${
        ativo ? 'text-gray-700' : 'text-gray-500'
      }`}>
        {descricao}
      </p>
      <div className="flex justify-between items-center">
        {ativo ? (
          <Link
        href={`/modalidades/${nome}`}
            className="text-blue-800 font-semibold hover:text-blue-600 transition-colors"
          >
            Saiba mais →
          </Link>
        ) : (
          <span className="text-gray-500 font-semibold">
            Modalidade suspensa
          </span>
        )}
        
        {!ativo && (
          <Link
            href="/inscricoes"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Inscrever-se
          </Link>
        )}
      </div>
    </div>
  );
}
