const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos, medias];

const exibeNomeNota = (nomeAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
        // Novos comandos
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não está cadastrado';
    }
}

console.log(exibeNomeNota('Emanuel'));