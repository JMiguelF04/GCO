"use client";

import Image from "next/image";
import Link from "next/link";
import { getProdutosDisponiveis, getProdutosComPromocao, getProdutosByCategoria, getProdutosByModalidade } from "@/data/produtos";
import { useState } from "react";

export default function LojaPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("todos");

  const categorias = [
    { nome: "Clube", slug: "clube", cor: "bg-indigo-600" },
    { nome: "Xadrez", slug: "xadrez", cor: "bg-purple-600" },
    { nome: "Andebol", slug: "andebol", cor: "bg-blue-600" },
    { nome: "Hóquei em Patins", slug: "hoquei-patins", cor: "bg-green-600" },
    { nome: "Ginástica", slug: "ginastica", cor: "bg-pink-600" },
    { nome: "Patinagem Artística", slug: "patinagem-artistica", cor: "bg-orange-600" }
  ];

  const obterProdutosFiltrados = () => {
    if (categoriaSelecionada === "todos") {
      return getProdutosDisponiveis();
    } else if (categoriaSelecionada === "clube") {
      return getProdutosByCategoria("Clube");
    } else if (categoriaSelecionada === "xadrez") {
      return getProdutosByModalidade("xadrez");
    } else if (categoriaSelecionada === "andebol") {
      return getProdutosByModalidade("andebol");
    } else if (categoriaSelecionada === "hoquei-patins") {
      return getProdutosByModalidade("hoquei-patins");
    } else if (categoriaSelecionada === "ginastica") {
      return getProdutosByModalidade("ginastica");
    } else if (categoriaSelecionada === "patinagem-artistica") {
      return getProdutosByModalidade("patinagem-artistica");
    }
    return getProdutosDisponiveis();
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header da Loja */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Loja Oficial GCO</h1>
          <p className="text-blue-200 text-lg">
            Descobre os nossos produtos oficiais e equipamentos desportivos
          </p>
        </div>
      </section>

      {/* Navegação por Categorias */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2">
            <button
              onClick={() => setCategoriaSelecionada("todos")}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                categoriaSelecionada === "todos"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos os Produtos
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria.slug}
                onClick={() => setCategoriaSelecionada(categoria.slug)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 ${
                  categoriaSelecionada === categoria.slug
                    ? `${categoria.cor} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Secções de Destaque */}
      {categoriaSelecionada === "todos" && (
        <>
          <ColecoesPrincipaisSection />
        </>
      )}

      {/* Produtos */}
      <ProdutosSection produtos={obterProdutosFiltrados()} categoria={categoriaSelecionada} />

      {/* Footer Info */}
      <FooterInfoSection />
    </main>
  );
}

function ColecoesPrincipaisSection() {
  const colecoes = [
    {
      titulo: "Produtos do Clube",
      descricao: "Casacos, pinos, t-shirts e sweats de adepto",
      imagem: "/produtos/casaco-exemplo.jpg",
      link: "#",
      cor: "from-indigo-500 to-indigo-600"
    },
    {
      titulo: "Modalidades Desportivas",
      descricao: "Equipamentos específicos para cada modalidade",
      imagem: "/produtos/kimono-exemplo.jpg",
      link: "#",
      cor: "from-blue-500 to-blue-600"
    },
    {
      titulo: "Patinagem",
      descricao: "Patins e equipamentos para patinagem artística",
      imagem: "/produtos/patins.jpg",
      link: "#",
      cor: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explora as Nossas Coleções
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colecoes.map((colecao, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={colecao.imagem}
                  alt={colecao.titulo}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${colecao.cor} opacity-80`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{colecao.titulo}</h3>
                  <p className="text-white/90 mb-4">{colecao.descricao}</p>
                  <button className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 self-start">
                    Ver Coleção
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProdutosSection({ produtos, categoria }: { produtos: any[], categoria: string }) {
  const obterTituloSecao = () => {
    switch (categoria) {
      case "clube": return "Produtos do Clube";
      case "xadrez": return "Xadrez";
      case "andebol": return "Andebol";
      case "hoquei-patins": return "Hóquei em Patins";
      case "ginastica": return "Ginástica";
      case "patinagem-artistica": return "Patinagem Artística";
      default: return "Todos os Produtos";
    }
  };

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {obterTituloSecao()}
          </h2>
          <span className="text-gray-600">
            {produtos.length} produto{produtos.length !== 1 ? 's' : ''}
          </span>
        </div>

        {produtos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <ProductCardBenfica key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500">
              Não temos produtos disponíveis nesta categoria no momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCardBenfica({ produto }: { produto: any }) {
  const isPromocao = produto.promocao?.ativa && new Date(produto.promocao.validadeAte) > new Date();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Badge Novidade/Promoção */}
      <div className="relative">
        <Image
          src={produto.imagem}
          alt={produto.nome}
          width={300}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {isPromocao && (
          <div className="absolute top-2 left-2">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              -{produto.promocao.desconto}% OFF
            </span>
          </div>
        )}
        
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Novidade
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {produto.nome}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {produto.descricao}
        </p>

        {/* Preços estilo Benfica */}
        <div className="space-y-2 mb-4">
          {isPromocao ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sócio</span>
                <span className="font-bold text-green-600">
                  {(produto.preco * 0.9).toFixed(2).replace('.', ',')} €
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Adepto</span>
                <span className="font-bold text-blue-600">{produto.precoFormatado}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 line-through">PVP</span>
                <span className="text-sm text-gray-400 line-through">
                  {produto.promocao.precoOriginal.toFixed(2).replace('.', ',')} €
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sócio</span>
                <span className="font-bold text-green-600">
                  {(produto.preco * 0.9).toFixed(2).replace('.', ',')} €
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Adepto</span>
                <span className="font-bold text-blue-600">{produto.precoFormatado}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">PVP</span>
                <span className="font-bold text-gray-900">{produto.precoFormatado}</span>
              </div>
            </>
          )}
        </div>

        <Link
          href={`/loja/${produto.slug}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
        >
          {produto.categoria === 'Serviços' || produto.categoria === 'Clube' ? 'Saber Mais' : 'Adicionar ao Carrinho'}
        </Link>
      </div>
    </div>
  );
}

function FooterInfoSection() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="text-6xl mb-6">🏢</div>
          <h2 className="text-4xl font-bold mb-6">Compras Locais</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Todos os produtos da nossa loja estão disponíveis para compra diretamente nas instalações do 
            Ginásio Clube de Odivelas. Visita-nos e conhece de perto a qualidade dos nossos equipamentos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">📍 Localização</h3>
              <p className="text-gray-300">
                Ginásio Clube de Odivelas<br />
                Rua Example, 123<br />
                2675-000 Odivelas
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">🕒 Horários de Atendimento</h3>
              <p className="text-gray-300">
                Segunda a Sexta: 09h00 - 22h00<br />
                Sábado: 09h00 - 19h00<br />
                Domingo: 09h00 - 13h00
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Dúvidas sobre produtos ou disponibilidade? Contacta-nos através do nosso{" "}
            <Link href="/contactos" className="text-blue-400 hover:text-blue-300">
              formulário de contacto
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
