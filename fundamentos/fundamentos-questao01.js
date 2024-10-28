function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function exibirDataHora() {
  const dataAtual = new Date();
  const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", 
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  const diaSemana = diasDaSemana[dataAtual.getDay()];
  const horas = formatNumber(dataAtual.getHours());
  const minutos = formatNumber(dataAtual.getMinutes());
  const segundos = formatNumber(dataAtual.getSeconds());
  const horaAtual = `${horas}:${minutos}:${segundos}`;

  console.log(`Hoje é: ${diaSemana}.`);
  console.log(`A hora atual é: ${horaAtual}.`);
}

exibirDataHora();
