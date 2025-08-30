import { calcularIdadeClube } from "@/utils/idadeClube";

export default function HeroSection() {

  const idade = calcularIdadeClube(new Date(1978, 4, 5));
  
  return (
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
            {idade} anos de tradição desportiva e cultural
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-50">
            Com sede em Odivelas, o clube dedica-se a promover a prática de diversas modalidades desportivas, 
            como a Ginástica, o Andebol, o Hóquei Patins, a Patinagem Artística e Xadrez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inscricoes"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Inscreva-se já
            </a>
            <a
              href="/modalidades"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              As Nossas Modalidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
