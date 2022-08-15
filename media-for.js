const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
    console.log(somaDasNotas);
}

let mediaDasNotas = somaDasNotas / notas.length;
console.log(`A soma das suas notas é ${somaDasNotas} e sua média é ${mediaDasNotas}`);