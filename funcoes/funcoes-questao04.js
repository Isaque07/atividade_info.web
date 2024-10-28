function palavraNaFrase(frase, palavra) {
  return frase.includes(palavra);
}

const frase = "Hoje é um dia lindo e ensolarado";
const palavra = "lindo";
const resultado = palavraNaFrase(frase, palavra);
console.log(`A palavra "${palavra}" está presente na frase? ${resultado}`);
