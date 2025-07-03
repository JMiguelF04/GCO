import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const noticias = [
    {
      id: 1,
      titulo: "TAÇA INATEL ANDEBOL LISBOA 2025",
      resumo: "Foi com mais uma vitória (27-18 contra o Liberdade FC) que a nossa equipa de Andebol, que este ano disputou...",
      data: "10/JUN/2025",
      categoria: "Andebol",
      imagem: "/GCO-LOGO-noBG.png",
      link: "/noticias/taca-inatel-andebol-2025"
    },
    {
      id: 2,
      titulo: "CAMPEONATO DISTRITAL DA 2ª DIVISÃO XADREZ",
      resumo: "Foi no passado dia 24 Maio, dia da última jornada do Campeonato Distrital da 2ª Divisão de Clássicas da AX...",
      data: "25/MAI/2025",
      categoria: "Xadrez",
      imagem: "/GCO-LOGO-noBG.png",
      link: "/noticias/campeonato-xadrez-2025"
    },
    {
      id: 3,
      titulo: "REGULAMENTO GERAL DA PATINAGEM ARTÍSTICA",
      resumo: "Informamos que foi colocada uma nova publicação na Pasta de Apoio da Plataforma da Patinagem Artística da Federação de...",
      data: "08/JAN/2025",
      categoria: "Patinagem",
      imagem: "/GCO-LOGO-noBG.png",
      link: "/noticias/regulamento-patinagem"
    },
    {
      id: 4,
      titulo: "CADERNETA OFICIAL 24-25",
      resumo: "O Ginásio Clube de Odivelas (GCO), é uma instituição desportiva de referência, com 46 anos de existência e dedicação...",
      data: "24/DEZ/2024",
      categoria: "Clube",
      imagem: "/GCO-LOGO-noBG.png",
      link: "/noticias/caderneta-oficial"
    }
  ];

  const modalidades = [
    { nome: "Ginástica", icone: "🤸‍♀️", descricao: "Ginástica artística e rítmica para todas as idades" },
    { nome: "Andebol", icone: "🤾‍♂️", descricao: "Equipes competitivas em várias categorias" },
    { nome: "Patinagem Artística", icone: "⛸️", descricao: "Formação e competição em patinagem artística" },
    { nome: "Hóquei em Patins", icone: "🏒", descricao: "Tradição e excelência no hóquei em patins" },
    { nome: "Dança", icone: "💃", descricao: "Diferentes estilos de dança e coreografia" },
    { nome: "Xadrez", icone: "♟️", descricao: "Desenvolvimento estratégico e competições" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/GCO-LOGO-noBG.png"
                alt="Ginásio Clube de Odivelas"
                className="h-24 w-24 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ginásio Clube de Odivelas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              46 anos de tradição desportiva e cultural
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">
              Com sede em Odivelas, o clube dedica-se a promover a prática de diversas modalidades desportivas, 
              como a Ginástica, o Andebol, o Hóquei Patins, a Patinagem Artística, Xadrez e outras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscricoes"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Inscreva-se Já
              </Link>
              <Link
                href="/modalidades"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Nossas Modalidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas Modalidades
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de modalidades desportivas para todas as idades e níveis de experiência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modalidades.map((modalidade, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-200"
              >
                <div className="text-4xl mb-4">{modalidade.icone}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{modalidade.nome}</h3>
                <p className="text-gray-700 mb-4">{modalidade.descricao}</p>
                <Link
                  href={`/modalidades/${modalidade.nome.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-800 font-semibold hover:text-blue-600 transition-colors"
                >
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notícias em Destaque
              </h2>
              <p className="text-lg text-gray-600">
                Fique por dentro das últimas novidades do clube
              </p>
            </div>
            <Link
              href="/noticias"
              className="hidden md:block bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
            >
              Ver todas as notícias
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {noticias.map((noticia, index) => (
              <article
                key={noticia.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {noticia.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {noticia.data}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {noticia.resumo}
                  </p>
                  <Link
                    href={noticia.link}
                    className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-600 transition-colors"
                  >
                    Ler mais
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/noticias"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors"
            >
              Ver todas as notícias
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Junte-se à Nossa Equipa
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Venha fazer parte da família GCO e desenvolva o seu potencial desportivo connosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscricoes"
              className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-colors"
            >
              Inscreva-se Agora
            </Link>
            <Link
              href="mailto:tryouts@gcodivelas.pt"
              className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 hover:text-white transition-colors"
            >
              Contactar Tryouts
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-gray-300">Sede em Odivelas, Lisboa</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:info@gcodivelas.pt" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                info@gcodivelas.pt
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tradição</h3>
              <p className="text-gray-300">46 anos de excelência desportiva</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
