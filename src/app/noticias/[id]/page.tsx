import { noticias } from "@/data/noticias";
import { notFound } from "next/navigation";
import Link from "next/link";

interface NoticiaPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const { id } = await params;
  const noticiaId = parseInt(id);
  const noticia = noticias.find(n => n.id === noticiaId);

  if (!noticia) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Início
            </Link>
            <span>/</span>
            <Link href="/noticias" className="hover:text-blue-600">
              Notícias
            </Link>
            <span>/</span>
            <span className="text-gray-900">{noticia.titulo}</span>
          </div>
        </nav>

        {/* Artigo */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {noticia.categoria}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {noticia.data}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {noticia.titulo}
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {noticia.resumo}
              </p>
              
              {/* Conteúdo expandido baseado no ID */}
              {noticiaId === 1 && (
                <div className="space-y-4 text-black text-black">
                  <p>
                    A nossa equipa de Andebol continua a demonstrar excelência no campo, conquistando mais uma vitória importante na Taça INATEL Andebol Lisboa 2025. Com um resultado de 27-18 contra o Liberdade FC, os nossos atletas mostraram determinação e técnica apurada.
                  </p>
                  <p>
                    Esta vitória consolida a posição da equipa na competição e demonstra o trabalho árduo realizado pelos treinadores e atletas ao longo da época. O GCO continua a ser uma referência no andebol da região de Lisboa.
                  </p>
                  <p>
                    Parabéns a todos os atletas, equipa técnica e adeptos que apoiaram a equipa nesta importante vitória!
                  </p>
                </div>
              )}
              
              {noticiaId === 2 && (
                <div className="space-y-4 text-black">
                  <p>
                    No passado dia 24 de Maio, realizou-se a última jornada do Campeonato Distrital da 2ª Divisão de Clássicas da Associação de Xadrez de Lisboa. A nossa representação teve uma prestação notável ao longo de toda a competição.
                  </p>
                  <p>
                    O xadrez no GCO tem vindo a crescer consistentemente, com jogadores de todas as idades a participar em competições distritais e regionais. Esta modalidade desenvolve o raciocínio estratégico e a capacidade de concentração dos nossos atletas.
                  </p>
                  <p>
                    Continuamos a investir na formação dos nossos enxadristas, proporcionando-lhes as melhores condições para evoluírem na modalidade.
                  </p>
                </div>
              )}
              
              {noticiaId === 3 && (
                <div className="space-y-4 text-black">
                  <p>
                    Foi disponibilizada uma nova publicação na Pasta de Apoio da Plataforma da Patinagem Artística da Federação de Patinagem de Portugal, contendo o Regulamento Geral da Patinagem Artística.
                  </p>
                  <p>
                    Este regulamento é essencial para todos os atletas, treinadores e dirigentes da modalidade, estabelecendo as normas e procedimentos que regem a patinagem artística nacional.
                  </p>
                  <p>
                    A nossa secção de Patinagem Artística continua a formar atletas de excelência, seguindo sempre as melhores práticas e regulamentações da modalidade.
                  </p>
                </div>
              )}
              
              {noticiaId === 4 && (
                <div className="space-y-4 text-black">
                  <p>
                    O Ginásio Clube de Odivelas (GCO) apresenta com orgulho a sua Caderneta Oficial 2024-25, documento que reflete os 46 anos de história e dedicação ao desporto da nossa instituição.
                  </p>
                  <p>
                    Esta caderneta contém informações importantes sobre todas as modalidades do clube, eventos realizados, conquistas alcançadas e projetos futuros. É um documento essencial para todos os sócios e simpatizantes do GCO.
                  </p>
                  <p>
                    Continuamos comprometidos em proporcionar o melhor ambiente desportivo e formativo para todos os nossos atletas e comunidade.
                  </p>
                </div>
              )}
            </div>

            {/* Botão de voltar */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/noticias"
                className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Voltar às Notícias
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

// Gerar páginas estáticas para todas as notícias
export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    id: noticia.id.toString(),
  }));
}