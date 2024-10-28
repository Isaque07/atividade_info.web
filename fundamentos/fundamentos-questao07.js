function modificarFrase(frase) {
  return frase
    .split(' ')
    .map(palavra => 
      palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
    )
    .join(' ');
}

const frase = "Hoje é um dia maravilhoso para programar";
console.log(modificarFrase(frase));
