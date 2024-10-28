function converterNome(nomeCompleto) {
  const partes = nomeCompleto.split(' ');
  const sobrenomes = partes.slice(0, partes.length - 1).map(p => p.charAt(0) + '.');
  const nome = partes[partes.length - 1];
  return `${sobrenomes.join(' ')} ${nome}`;
}

const nome = "Isaque Carolino de Sousa Abreu";
console.log(converterNome(nome));
