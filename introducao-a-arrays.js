// Notas médias
// let nota1 = 10;
// let nota2 = 8;
// let nota3 = 7.5;
// let nota4 = 8.5;

// let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Criação de arrays
const notas = [10, 8, 7.5, 8.5];

// Acessamos os valores dentro do array colocando a posição deles dentro do colchetes, lembre-se que sempre começa do zero
// .length é um comando usado para andar por dentro do array, no código abaixo vai dividir pela quantidade de posições que tem no array, no caso 4
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A sua média é ${media}`);