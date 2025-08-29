import prisma from "@/lib/prisma";

export async function fetchAllModalidadeSlugs() {
  const modalidades = await prisma.modalidades.findMany({
    select: { slug: true }
  });
  return modalidades;
}

export async function fetchModalidadeBySlug(slug: string) {
  const modalidade = await prisma.modalidades.findUnique({
    where: { slug },
    include: {
      detalhes_modalidade: true,
      niveis: { select: { descricao: true } },
      equipamento: { select: { nome: true } },
      competicoes: { select: { nome: true } },
      horarios: true,
      contacto_modalidade: true,
      preco: true, // Inclui logo o array de preços
    },
  });

  if (!modalidade) return null;

  // Cria um novo objeto, sem modificar o original
  return {
    ...modalidade,
    niveis: modalidade.niveis.map((n: {descricao: string}) => n.descricao),
    equipamento: modalidade.equipamento.map((e: {nome: string}) => e.nome),
    competicoes: modalidade.competicoes.map((c: {nome: string}) => c.nome),
    contacto: modalidade.contacto_modalidade[0] || {},
    preco: modalidade.preco, // Mantém como array, como vem do Prisma
  };
}
