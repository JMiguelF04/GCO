export function calcularIdadeClube(dataFundacao: Date): number {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataFundacao.getFullYear();

  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();
  const mesFundacao = dataFundacao.getMonth();
  const diaFundacao = dataFundacao.getDate();

  if (mesAtual < mesFundacao || (mesAtual === mesFundacao && diaAtual < diaFundacao)) {
    idade--;
  }

  return idade;
}
