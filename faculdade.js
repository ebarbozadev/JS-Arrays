const aluno = ['Emanuel', 'Amanda'];
const ra = [23001, 23002];

const alunosRegistrados = [aluno, ra];

const procuraAluno = (nomeAluno) => {
    if (alunosRegistrados[0].includes(nomeAluno)){
        let indice = alunosRegistrados[0].indexOf(nomeAluno);
        return `${alunosRegistrados[0][indice]}, seu RA é ${alunosRegistrados[1][indice]}`;
    } else {
        return `Aluno não encontrado`;
    }
}

console.log(procuraAluno("Sérgio"));