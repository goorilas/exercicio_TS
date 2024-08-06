//ts orientado a objetos.
//aqui vmos a um exemplo de criar uma classe no JS convencional. Claro que no ts VAI ESTAR ERRADO.
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
// }
//como no nome em cima citado, o ts não quer ele implicito e sim explicito, isso acontece por que não declaramos o tipo que ele é, então o ts o classificou como (any).
class Pessoa1 {
//no ts nós declaramos a propriedade antes, depois da abertura da {}.
    nome1: string;
//podemos ter propriedades opcionais (?) dentro de uma classe como logo a baixo. O argumento opcional ele deve ser sempre depois de um argumento obrigatório.
//e um argumento obrigatório nunca vem depois de um opcional.
    renda?: number;

    constructor(nome1: string, renda?: number) { //no constructor a renda tbm é opcional então ela terá tbm o (?).
        this.nome1 = nome1
        this.renda = renda
    }
//nos metodos usamos essa forma.
    dizOla(): string {
        return `${this.nome1} disse oi`;
    }
}


//Modificadores
//no TS temos tbm o protector, mas ele pode ser alterado fora da classe, apenas por classes que herdam dele.
class ContaBancaria {
    
    //tornando privado com (private), que é acessivel apenas a classe que se encontra.
    // private saldo: number = 0;  //o private não é acessivel como herança de outra class como a da pessoa física logo a baixo.
    //para tornar um valor privado acessivel pela herança abaixo usamos o protected.
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornaNumeroDoBanco() { //tbm podemos criar um modificador estatico, o (static) pertence a class. podemos utilizar ele sem criar uma instancia para isso.
        return 125;
    }

//colocando metodos para o privado.
    getSaldo() { //aqui pegamos o saldo. Tbm podemos colocar a propriedade (private) aqui.
        return this.saldo;
    }

    depositar(valor: number) { //aqui a gente deposita uma nova quantia.
        this.saldo += valor;
    }
}

//criando classe de pessoa fisica em um banco e adicionando herança.
class ContaBancariaPessoaFisica extends ContaBancaria { //aqui ContaBancariaPessoaFisica herda os valores de ContaBancaria com (extends).
    depositar(valor: number): void { //temos aqui o argumento valor numerico e o retorno da função (void) por não ter retorno nenhum.
        this.saldo = valor * 2; //aqui é um exemplo com o tipo (protected), que conseguimos acessar atraves da herança. 
    }
}
//par ailustrar esse cenário no campo protegido vmos crias uma instancia de conta bancária de pessoa fisica.
const constaPedro = new ContaBancariaPessoaFisica(123456)
constaPedro.depositar //note aqui que a propriedade saldo não está disponivel por ser (protected), ela so estará disponivel dentro da  própria classe e das heranças(classes filhas).
