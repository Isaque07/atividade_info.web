function contarVogaisEConsoantes(frase) {
  const vogais = "aeiouAEIOU";
  let contagemVogais = 0;
  let contagemConsoantes = 0;

  for (const char of frase) {
    if (/[a-zA-Z]/.test(char)) {
      if (vogais.includes(char)) {
        contagemVogais++;
      } else {
        contagemConsoantes++;
      }
    }
  }

  return {
    vogais: contagemVogais,
    consoantes: contagemConsoantes
  };
}

const frase = "Hoje é um dia ensolarado";
const resultado = contarVogaisEConsoantes(frase);
console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);
