function numeroMaisFrequente(arr) {
  const frequencia = {};
  let maxNum = arr[0];
  let maxFrequencia = 0;

  for (const num of arr) {
    frequencia[num] = (frequencia[num] || 0) + 1;
    if (frequencia[num] > maxFrequencia) {
      maxFrequencia = frequencia[num];
      maxNum = num;
    }
  }

  return maxNum;
}

const numeros = [1, 3, 2, 3, 4, 3, 2, 1, 3];
console.log(numeroMaisFrequente(numeros));
