import prisma from "@/lib/prisma";

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
    },
  });

  if (!modalidade) return null;

  // Transformar arrays de objectos em arrays de strings onde necessário
  modalidade.niveis = modalidade.niveis.map((n) => n.descricao);
  modalidade.equipamento = modalidade.equipamento.map((e) => e.nome);
  modalidade.competicoes = modalidade.competicoes.map((c) => c.nome);
  modalidade.contacto = modalidade.contacto_modalidade[0] || {};
  modalidade.preco = await prisma.preco.findFirst({
    where: { modalidade_id: modalidade.id },
  });

  return modalidade;
}
