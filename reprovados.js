const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_, indice) => notas[indice] < 5);
// const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);
console.log(`Reprovados: ${reprovados}`);
// Filter no nomes porque queremos retornar o nome dos reprovados
// Quando passamos dois parâmetros temos que colocar entre parênteses
// O filter retorna booleano, ou seja, true ou false