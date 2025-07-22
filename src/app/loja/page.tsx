// app/loja/page.tsx

import Image from "next/image";
import Link from "next/link"

const produtos = [
  {
    nome: "T-shirt Oficial GCO",
    preco: "15,00 €",
    imagem: "/produtos/tshirt-exemplo.jpg",
    slug: "t-shirt-oficial-gco"
  },
  {
    nome: "Casaco Corta-Vento GCO",
    preco: "30,00 €",
    imagem: "/produtos/casaco-exemplo.jpg",
    slug: "casaco-corta-vento-gco"
  },
  {
    nome: "Kimono de Karaté",
    preco: "40,00 €",
    imagem: "/produtos/kimono-exemplo.jpg",
    slug: "kimono-gco"
  },
  {
    nome: "Mochila Desportiva GCO",
    preco: "25,00 €",
    imagem: "/produtos/mochila.jpg",
    slug: "mochila-oficial-gco"
  },
  {
    nome: "Pinos de Desporto",
    preco: "3,00 € (jóia) + 5,00 €/mês",
    imagem: "/produtos/pinos.jpg",
    slug: "pinos"
  },
  {
    nome: "Patins",
    preco: "10,00 €",
    imagem: "/produtos/patins.jpg",
    slug: "pinos"
  },
];

export default function LojaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 via-black to-yellow-400 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Loja GCO</h1>
        <p className="text-center mb-12 text-lg">
          Explora os nossos produtos oficiais, equipamentos desportivos e serviços.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{produto.nome}</h2>
                <p className="text-blue-700 font-bold mt-2 py-3">{produto.preco}</p>
                <Link className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded" href={`/loja/${produto.slug}`}>
                  Comprar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
