import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/modalidades"
            className="text-blue-800 hover:text-blue-600 font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar às Modalidades
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-800 py-12 px-8 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="text-8xl bg-white text-green-600 w-28 h-28 rounded-full flex items-center justify-center">
                🤾‍♂️
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Andebol</h1>
                <p className="text-xl text-green-100">Equipas competitivas em várias categorias</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Andebol no GCO</h2>
            <p className="text-gray-700 mb-6">
              O Andebol no Ginásio Clube de Odivelas tem uma longa tradição de excelência, com equipas que competem em diversos escalões e níveis de competição. Focamos na formação de jovens atletas, com ênfase no desenvolvimento técnico, tático e físico.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Escalões Disponíveis</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Infantis (10-11 anos)</li>
                  <li>Iniciados (12-13 anos)</li>
                  <li>Juvenis (14-15 anos)</li>
                  <li>Juniores (16-17 anos)</li>
                  <li>Seniores (18+ anos)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horários de Treino</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Infantis: Terças e Quintas, 18h00-19h30</li>
                  <li>Iniciados: Segundas e Quartas, 18h00-19h30</li>
                  <li>Juvenis: Terças e Quintas, 19h30-21h00</li>
                  <li>Juniores: Segundas e Quartas, 19h30-21h00</li>
                  <li>Seniores: Terças, Quintas e Sextas, 21h00-22h30</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Informações Importantes
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Inscrições abertas todo o ano, sujeitas a disponibilidade</li>
                <li>Equipamento de treino fornecido pelo clube</li>
                <li>Competições aos fins-de-semana</li>
                <li>Avaliação técnica inicial para novos atletas</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inscricoes?modalidade=andebol"
                className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors text-center"
              >
                Inscrever-se
              </Link>
              <Link
                href="/horarios?modalidade=andebol"
                className="border-2 border-green-700 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition-colors text-center"
              >
                Ver Horários Detalhados
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
