"use strict";
//função tipada
function calculaArea(base, altura) {
    return base * altura;
}
//tbm funciona para uma arrow function. Aqui apenas com uma linha a gente reescreve o código acima.
const calculaArea2 = (base, altura) => base;
//podemos tbm tipar o array com rest. quando temos um console.log usamos o void(que significa vazio) para deixar explicito.
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
//a gente tbm pode estar usando o uniontype nas funções. 
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTestee = teste();
