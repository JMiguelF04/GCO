import { modalidades } from "@/data/modalidades";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ModalidadePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModalidadePage({ params }: ModalidadePageProps) {
  const { slug } = await params;
  const modalidade = modalidades.find(m => m.slug === slug);

  if (!modalidade) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600">
              Modalidades
            </Link>
            <span>/</span>
            <span className="text-gray-900">{modalidade.nome}</span>
          </div>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-center">
              <div className="text-6xl mr-6">
                {modalidade.icone}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  {modalidade.nome}
                </h1>
                <p className="text-xl text-blue-100">
                  {modalidade.descricao}
                </p>
                {!modalidade.ativo && (
                  <div className="mt-4">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MODALIDADE TEMPORARIAMENTE SUSPENSA
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre a Modalidade</h2>
              
              {slug === 'andebol' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    O andebol no GCO tem uma longa tradição de excelência, com equipas competitivas em várias categorias etárias. 
                    Desenvolvemos não apenas as habilidades técnicas e táticas, mas também o espírito de equipa e os valores desportivos.
                  </p>
                  <p className="text-gray-700">
                    As nossas equipas participam regularmente em competições distritais e nacionais, conseguindo sempre resultados de destaque. 
                    O trabalho realizado pelos nossos treinadores qualificados permite o desenvolvimento integral dos atletas.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Categorias Disponíveis</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Iniciados (12-14 anos)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Juvenis (14-16 anos)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Juniores (16-18 anos)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Seniores (+18 anos)
                    </li>
                  </ul>
                </div>
              )}

              {slug === 'ginastica' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    A ginástica no GCO oferece formação completa em ginástica artística e rítmica, proporcionando aos atletas 
                    o desenvolvimento da flexibilidade, força, coordenação e expressão corporal.
                  </p>
                  <p className="text-gray-700">
                    Com instalações modernas e treinadores especializados, criamos um ambiente seguro e estimulante para o 
                    desenvolvimento dos nossos ginastas, desde os primeiros passos até ao alto rendimento.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Disciplinas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Ginástica Artística Feminina
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Ginástica Artística Masculina
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Ginástica Rítmica
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Ginástica de Trampolins
                    </li>
                  </ul>
                </div>
              )}

              {slug === 'patinagem-artistica' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    A patinagem artística no GCO combina técnica, arte e atletismo, proporcionando aos atletas uma formação 
                    completa que desenvolve a coordenação, equilíbrio e expressão artística.
                  </p>
                  <p className="text-gray-700">
                    Os nossos patinadores participam em competições regionais e nacionais, representando o clube com distinção 
                    e alcançando resultados de excelência nas suas categorias.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Modalidades</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Solo Feminino
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Solo Masculino
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Pares Artísticos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Dança no Gelo
                    </li>
                  </ul>
                </div>
              )}

              {slug === 'xadrez' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    O xadrez no GCO é mais do que um jogo - é uma ferramenta educativa que desenvolve o raciocínio lógico, 
                    a capacidade de análise e a tomada de decisões estratégicas.
                  </p>
                  <p className="text-gray-700">
                    Os nossos enxadristas participam em torneios escolares, distritais e nacionais, representando o clube 
                    com distinção e contribuindo para o prestígio da modalidade.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Atividades</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Treinos Regulares
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Torneios Internos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Competições Escolares
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Campeonatos Distritais
                    </li>
                  </ul>
                </div>
              )}

              {slug === 'hoquei-em-patins' && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-yellow-800">
                      <strong>Atenção:</strong> Esta modalidade encontra-se temporariamente suspensa devido ao não cumprimento 
                      de regulamentações específicas. Estamos a trabalhar para resolver a situação o mais rapidamente possível.
                    </p>
                  </div>
                  <p className="text-gray-700">
                    O hóquei em patins tem uma tradição importante no GCO, sendo uma modalidade que combina velocidade, 
                    técnica e espírito de equipa de forma única.
                  </p>
                  <p className="text-gray-700">
                    Estamos empenhados em retomar a atividade desta modalidade assim que as condições regulamentares 
                    sejam restabelecidas, proporcionando novamente aos nossos atletas a oportunidade de praticar este desporto.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações</h3>
              
              {modalidade.ativo ? (
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Modalidade Ativa</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/inscricoes"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors block"
                    >
                      Inscrever-se Agora
                    </Link>
                  </div>
                  
                  <div className="pt-2">
                    <Link
                      href="/contactos"
                      className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-center font-semibold transition-colors block"
                    >
                      Mais Informações
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center text-red-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">Modalidade Suspensa</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    Esta modalidade encontra-se temporariamente suspensa. Para mais informações, entre em contacto connosco.
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/contactos"
                      className="w-full border border-gray-400 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg text-center font-semibold transition-colors block"
                    >
                      Contactar Clube
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Os Atletas</h3>
                <Link
                  href={`/modalidades/${slug}/atletas`}
                  className="bg-blue-600 w-full border border-blue-600 text-white hover:bg-blue-700 px-4 py-3 rounded-lg text-center font-semibold transition-colors block"
                >
                  Consultar Lista
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contacto</h3>
              <div className="space-y-3 text-sm text-gray-600 space">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@gcodivelas.pt" className="hover:text-blue-600">
                    info@gcodivelas.pt
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Sede em Odivelas, Lisboa</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/modalidades"
            className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar às Modalidades
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return modalidades.map((modalidade) => ({
    slug: modalidade.slug,
  }));
}
