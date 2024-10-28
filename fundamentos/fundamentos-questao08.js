function inverterFrase(frase) {
  return frase.split('').reverse().join('');
}

const frase = "Programar é divertido";
console.log(inverterFrase(frase));
