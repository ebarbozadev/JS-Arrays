let listaDeChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
// listaDeChamada.splice(1,3,"Emanuel");
//Retira do index 1 até o index 3 (Ana, Caio e Lara), e no lugar deles coloque "Emanuel"

listaDeChamada.splice(2,0,"Lee");
// Depois do index 2 não remova nenhum, mas adicione o "Lee" no lugar

console.log(listaDeChamada);