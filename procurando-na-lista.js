// const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
// const medias = [10, 8, 7.5, 9];

// let listaDeNotasEAlunos = [alunos, medias];

// const exibeNomeNota = (nomeAluno) => {
//     if (listaDeNotasEAlunos[0].includes(nomeAluno)){
//         indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
//         // Novos comandos
//         return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
//     } else {
//         return 'Aluno não está cadastrado';
//     }
// }

// console.log(exibeNomeNota('João'));

// const funcionarios = ['Daniela Chefe', 'Daniela Fiscal', 'Lee', 'Celso', 'Everton', 'Pedro', 'Gilson'];
// const salarioFuncionarios = [4000, 2000, 2000, 2000, 2000, 2000, 2000];

// const estagiarios = ['Emanuel', 'Gabriela', 'Luan', 'Humberto'];
// const salarioEstagiarios = [600, 600, 600, 600];

// const trabalhadores = funcionarios.concat(estagiarios);
// const salarioTrabalhadores = salarioFuncionarios.concat(salarioEstagiarios);

// const trabalhadoresESalarios = [trabalhadores, salarioTrabalhadores];

// // console.log(trabalhadores);
// // console.log(salarioTrabalhadores);

// const exibeTrabalhadorESalario = (nomeTrabalhador) => {
//     if (trabalhadoresESalarios[0].includes(nomeTrabalhador)){
//         indice = trabalhadoresESalarios[0].indexOf(nomeTrabalhador);
//         return trabalhadoresESalarios[0][indice] + ', seu salário é ' + trabalhadoresESalarios[1][indice];
//     } else {
//         return 'Trabalhador não encontrado';
//     }
// }

// console.log(exibeTrabalhadorESalario('Daniela Chefe'));

const alunosDoTI = ['Emanuel', 'Ana', 'Gabriel', 'Jorge'];
const mediasAlunosDoTI = [8, 10, 9, 7];

const mediasAlunos = [alunosDoTI, mediasAlunosDoTI];

const alunoEMedia = (nomeAluno) => {
    if (mediasAlunos[0].includes(nomeAluno)){
        indice = mediasAlunos[0].indexOf(nomeAluno);
        return `${mediasAlunos[0][indice]}, sua nota é ${mediasAlunos[1][indice]}`;
    } else {
        return 'Aluno não encontrado';
    }
}

console.log(alunoEMedia('Gabriel'));