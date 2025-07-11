import { noticias } from "@/data/noticias";
import NoticiaCard from "@/components/cards/NoticiaCard";

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notícias GCO
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fique por dentro de todas as novidades e acontecimentos do Ginásio Clube de Odivelas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
      </div>
    </main>
  );
}
