const notas = [10, 6, 8];
// .push é uma função que adiciona no final do array, uma nova posição no nosso array, e se retirarmos e deixá-la vazia, o array volta "ao normal"
notas.push(7);
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);