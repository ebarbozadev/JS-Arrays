// Estudo sobre for

// Estudo sobre forEach
let notas = [10, 9, 8, 10];
let somaDasNotas = 0;

notas.forEach(nota => {
  somaDasNotas += nota;
  // console.log(somaDasNotas);
})

let mediasForEach = somaDasNotas / notas.length;
//console.log(mediasForEach);

console.log(`A soma das notas é ${somaDasNotas} e a média é ${mediasForEach} sendo dividido por ${notas.length} notas!`);

let nomes = ['Emanuel', 'Lee', 'Evertom'];
let txt = " ";
nomes.forEach(nome => {
  txt += nome;
});
console.log(txt);

// Estudo sobre pesquisar em matriz
const alunos = ['Emanuel', 'Kimura', 'João'];
const medias = [8, 9, 10];

const notas = [alunos, medias];

const procuraMedia = (nomeAluno) => {
  if (notas[0].includes(nomeAluno)) {
    let indice = notas[0].indexOf(nomeAluno);
    return `${notas[0][indice]}, sua nota é ${notas[1][indice]}`;
  } else {
    return 'Aluno não encontrado';
  }
}

console.log(procuraMedia('João'));

const nome = ['Lee', 'Daniela', 'Humberto', 'Luan', 'Gabriela'];
const endereco = ['Zona 001', 'Zona 002', 'Zona 003', 'Zona 004', 'Zona 005'];

const moradores = [nome, endereco];

const localizacao = (nomeMorador) => {
  if (moradores[0].includes(nomeMorador)) {
    let indice = moradores[0].indexOf(nomeMorador);
    return `MORADOR: ${moradores[0][indice]} ENDEREÇO: ${moradores[1][indice]}`;
  } else {
    return `Morador não encontrado`;
  }
}

console.log(localizacao('Luan'));