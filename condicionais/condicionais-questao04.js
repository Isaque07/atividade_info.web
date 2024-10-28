const alunos = [
  ["Aluno1", [10, 50, 100]],
  ["Aluno2", [55, 78, 90]],
  ["Aluno3", [80, 60, 70]],
  ["Aluno4", [40, 50, 60]],
  ["Aluno5", [90, 95, 100]]
];

alunos.forEach(aluno => {
  const nome = aluno[0];
  const notas = aluno[1];
  const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
  const status = media < 70 ? "Reprovado" : "Aprovado";
  console.log(`${nome}, média ${media.toFixed(2)}, ${status}.`);
});
