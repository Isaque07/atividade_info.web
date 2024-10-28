function somaTamanhosPalavras(frase) {
  return frase.split(' ').reduce((soma, palavra) => soma + palavra.length, 0);
}

const frase = "Hoje é um dia maravilhoso para programar";
console.log(somaTamanhosPalavras(frase));
