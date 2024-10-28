function palavraPresente(frase, palavra) {
  return frase.includes(palavra);
}

const frase = "Hoje é um dia lindo e ensolarado";
const palavra = "lindo";
console.log(palavraPresente(frase, palavra));
