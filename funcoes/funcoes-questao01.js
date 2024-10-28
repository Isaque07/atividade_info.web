function inverterNumero(numero) {
  return parseInt(numero.toString().split('').reverse().join(''));
}

const numero = 45678;
console.log(inverterNumero(numero));
