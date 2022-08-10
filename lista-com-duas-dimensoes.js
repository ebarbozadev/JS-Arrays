let alunos = ['João', 'Juliana', 'Caio', 'Ana'];
let medias = [10, 7, 9, 6];

const listaDeNotasEAlunos = [alunos, medias];
// Basicamente criamos uma lista dentro da outra

console.log(`${listaDeNotasEAlunos[0][0]}, a sua média é ${listaDeNotasEAlunos[1][0]}`);
// Basicamente é! dentro da listaDeNotasEAlunos vamos acessar o index 0, sendo o indice 0 os alunos, e dentro de alunos queremos o index 0, no caso, João
// Basicamente é! dentro da listaDeNotasEAlunos vamos acessar o index 1, sendo o indice 1 as medias, e dentro das medias queremos o index 0, no caso, 10

let nome = ['Emanuel', 'Lee', 'Gabrieli', 'Celso', 'Everton', 'Daniela'];
let idade = [19, 27, 21, 47, 38, 25];
let materia = ['Análise e Desenvolvimento de Sistemas', 'Contabeis', 'Arquitetura', 'Arquitetura', 'Fiscal', 'Administração'];
let ra = [01, 02, 03, 04, 05, 06];

const alunos = [ra, nome, idade, materia];
console.log(`RA: ${alunos[0][0]} NOME: ${alunos[1][0]} IDADE ${alunos[2][0]} MATÉRIA ${alunos[3][0]}`);