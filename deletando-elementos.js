const notas = [10, 7, 8, 5, 10];
// .pop é uma função, ele não aceita nenhum parâmetro, quando o usamos o JS entende que queremos tirar o último valor da lista do array
notas.pop();
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// Template string
console.log(`Sua média é ${media}`);