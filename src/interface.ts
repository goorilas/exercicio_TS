//criando uma interface de contas de banco.
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

//não temos a possibilidade de transferir dinheiro para outros usuarios... apenas na conta corrente.
//para ter essa capacidade de fazer transações financeirar vmos criar uma (interface).
//por convenção iniciamos com a letra (I) i maiusculo depois o nome.
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
} 

//a gente consegue ter um tipo de herança entre interfaces.
//para reaproveitar um compo de uma interface anterior.
interface IExemplo3 extends IExemplo2 {
    telefone: number;
}


//para implementar a interface que criamos, depois do extends (classe) colocamos a palavra reservada (implements) seguida de interface que criamos(ITransacional).
//podemos implementar uquantas interfaces quizermos.
class ContaCorrente extends Conta implements ITransacional, IExemplo2 { //aqui ele vai apontar o erro para a class por não ter implementado o campo cnpj.
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;
}

//tbm podemos utilizar a interface para tipar nossos dados, nossas variaveis ex:
const contaDaMaria: ITransacional = {
//apertando (ctrl + espaço) verificamos todos os campos que a gente precisa preencher para que essa interface seja antendida.   
}
