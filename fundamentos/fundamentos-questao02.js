function calcularAreaTriangulo(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

const lados = [3, 4, 5];
const area = calcularAreaTriangulo(...lados);
console.log(`A área do triângulo é: ${area}`);
