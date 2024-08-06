//função tipada
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

//tbm funciona para uma arrow function. Aqui apenas com uma linha a gente reescreve o código acima.
const calculaArea2 = (base: number, altura: number): number => base


//podemos tbm tipar o array com rest. quando temos um console.log usamos o void(que significa vazio) para deixar explicito.
function somar(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros)
}

//a gente tbm pode estar usando o uniontype nas funções. 
function teste(): string | number { //essa forma conseguimos retornar valores de tipos diferentes dentro de uma função.
    if (10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}
const resultadoDeTestee = teste()