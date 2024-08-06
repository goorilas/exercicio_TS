"use strict";
//criando uma interface de contas de banco.
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
//para implementar a interface que criamos, depois do extends (classe) colocamos a palavra reservada (implements) seguida de interface que criamos(ITransacional).
//podemos implementar uquantas interfaces quizermos.
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
}
//tbm podemos utilizar a interface para tipar nossos dados, nossas variaveis ex:
const contaDaMaria = {
//apertando (ctrl + espaço) verificamos todos os campos que a gente precisa preencher para que essa interface seja antendida.   
};
