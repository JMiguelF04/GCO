import Link from "next/link";
import HeroSection from "@/components/layout/HeroSection";
import ModalidadesSection from "@/components/layout/ModalidadesSection";
import NoticiasSection from "@/components/layout/NoticiasSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <ModalidadesSection />
      <NoticiasSection />
      
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
