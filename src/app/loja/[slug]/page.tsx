import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProdutoPageProps {
  params: { slug: string };
}

const produtos = [
  {
    nome: "T-shirt Oficial GCO",
    preco: "15,00 €",
    imagem: "/produtos/tshirt-exemplo.jpg",
    slug: "t-shirt-oficial-gco",
  },
  {
    nome: "Casaco Corta-Vento GCO",
    preco: "30,00 €",
    imagem: "/produtos/casaco-exemplo.jpg",
    slug: "casaco-corta-vento-gco",
  },
  {
    nome: "Kimono de Karaté",
    preco: "40,00 €",
    imagem: "/produtos/kimono-exemplo.jpg",
    slug: "kimono-gco",
  },
  {
    nome: "Mochila Desportiva GCO",
    preco: "25,00 €",
    imagem: "/produtos/mochila.jpg",
    slug: "mochila-oficial-gco",
  },
  {
    nome: "Pinos de Desporto",
    preco: "3,00 € (jóia) + 5,00 €/mês",
    imagem: "/produtos/pinos.jpg",
    slug: "pinos",
  },
  {
    nome: "Patins",
    preco: "10,00 €",
    imagem: "/produtos/patins.jpg",
    slug: "pinos",
  },
];

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const produto = produtos.find((p) => p.slug === params.slug);

  if (!produto) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-800 via-black to-yellow-400 text-white py-12">
      <div className="max-w-3xl mx-auto text-black bg-white p-6 rounded-xl shadow-lg">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          width={800}
          height={500}
          className="rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
        <p className="text-lg text-blue-700 font-semibold mb-4">
          {produto.preco}
        </p>
        <p className="text-gray-700 mb-6">
          Produto oficial do Ginásio Clube de Odivelas. Ideal para atletas,
          familiares e simpatizantes.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded">
          Adicionar ao Carrinho
        </button>
        <div className="mt-8">
          <Link
            href="/loja"
            className="text-blue-600 hover:underline"
          >
            &larr; Voltar à loja
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return produtos.map((produto) => ({
    slug: produto.slug,
  }));
}
