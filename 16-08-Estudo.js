// Loop com for
const notas = [9, 8, 10, 9];
let media = 0;

for (let i = 0; i < notas.length; i++) {
  media += notas[i];
}

media = media / notas.length;

console.log(`Sua média é ${media}!`);

// Loop com forEach
const salario = [9862, 5678, 3571, 6579, 8972, 9873, 8763, 1238, 8972, 6589, 5489, 3428];

let totalMeses = 0;

salario.forEach(mes => {
  totalMeses += mes;
})

console.log(`Você ganhou no mês ${totalMeses / 12}`);

const notaAmanda = [10, 10, 10, 10];
const notaVinicius = [8, 9, 8, 9];
const notaDavid = [6, 6, 7, 6];

let medias = 0;

const notaPovo = [notaAmanda, notaVinicius, notaDavid];

for (x = 0; x < notaPovo.length; x++) {
  for (y = 0; y < notaPovo[x].length; y++) {
    medias += notaPovo[x][y] / notaPovo[x].length;
  }
}

medias = medias / notaPovo.length;

console.log(medias);