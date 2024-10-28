function encontrarMaiorEMenor(lista) {
  let maior = Math.max(...lista);
  let menor = Math.min(...lista);
  return {
    maior: maior,
    menor: menor
  };
}

const numeros = [34, 12, 5, 67, 23, 1, 89, 45, 7, 100];
const resultado = encontrarMaiorEMenor(numeros);
console.log(`Maior: ${resultado.maior}, Menor: ${resultado.menor}`);
