function ordenarNumeros(lista) {
  return lista.sort((a, b) => a - b);
}

const numeros = [34, 12, 5, 67, 23, 1];
console.log(ordenarNumeros(numeros));
