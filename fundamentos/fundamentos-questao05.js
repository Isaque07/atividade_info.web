function checarNumeros(a, b, c) {
  if (a >= 50 && a <= 99 && b >= 50 && b <= 99 && c >= 50 && c <= 99) {
    console.log("Sucesso");
  } else {
    console.log("Erro");
  }
}

const num1 = 55;
const num2 = 70;
const num3 = 90;

checarNumeros(num1, num2, num3);
