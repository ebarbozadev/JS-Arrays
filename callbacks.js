console.log("----------");

const nomes = ['Ana', 'Ju', 'Leo', 'Paulo'];

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log("----------");

nomes.forEach(nome => {
    console.log(nome);
})

console.log("----------");

nomes.forEach(imprimeNomes);
function imprimeNomes(nome){
    console.log(nome);
}

console.log("----------");