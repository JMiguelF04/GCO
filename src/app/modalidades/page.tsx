export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Modalidades</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <a 
            href="/modalidades/andebol"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
              <span className="text-8xl">🤾‍♂️</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Andebol</h2>
              <p className="text-gray-600 mb-4">
                Equipes competitivas em várias categorias, desenvolvendo técnica, tática e espírito de equipa.
              </p>
              <span className="text-green-700 font-semibold">Ver detalhes →</span>
            </div>
          </a>
          
          <a 
            href="/modalidades/ginastica"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
              <span className="text-8xl">🤸‍♀️</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Ginástica</h2>
              <p className="text-gray-600 mb-4">
                Ginástica artística e rítmica para todas as idades, desenvolvendo flexibilidade, coordenação e força.
              </p>
              <span className="text-purple-700 font-semibold">Ver detalhes →</span>
            </div>
          </a>
          
          <a 
            href="/modalidades/patinagem-artistica"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center">
              <span className="text-8xl">⛸️</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Patinagem Artística</h2>
              <p className="text-gray-600 mb-4">
                Formação e competição em patinagem artística, com foco na técnica, coreografia e expressão artística.
              </p>
              <span className="text-pink-700 font-semibold">Ver detalhes →</span>
            </div>
          </a>
          
          <a 
            href="/modalidades/xadrez"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-8xl">♟️</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Xadrez</h2>
              <p className="text-gray-600 mb-4">
                Desenvolvimento estratégico e competições, aprimorando raciocínio lógico e concentração.
              </p>
              <span className="text-blue-700 font-semibold">Ver detalhes →</span>
            </div>
          </a>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
            <div className="h-48 bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center relative">
              <span className="text-8xl filter grayscale">🏒</span>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-full">SUSPENSO</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-600 mb-2">Hóquei em Patins</h2>
              <p className="text-gray-500 mb-4">
                Modalidade temporariamente suspensa devido ao não cumprimento de regulamentações.
              </p>
              <span className="text-gray-400 cursor-not-allowed">Modalidade suspensa</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
