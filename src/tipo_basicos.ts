//criando variaveis no ts
let estaChovendo: boolean = false

//a gente não pode atribuir um valor string a uma variavel do tipo boleano ex: estaChovendo = 'true'
estaChovendo = true

//no typescript não tem diferença do tipo inteiro e do fracionado ex: (27) (1.75) se escreve da mesma forma. 
let idade: number = 27
let altura: number = 1.75

//tipo string de typescript.
const nacionalidade: string = 'brasileira'

//no typescript a gente tipa o array, fala que ele é um array de string ou de numeros ou boleanos.
const colegas: string[] = ['lucas', 'fernanda']

//uma outra forma de tipar o array é atravez da palavra reservada Array.
const tecnologias: Array<string> = ['html', 'css', 'js']

//temos tbm um outro tipo de array, um de apenas leitura. 
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

//temos um tipo que permite uma estrutura parecida com o array mas com dados diferentes chamadas tuplas.
//na tupla passamor os tipos e depois os valores como a baixo.
const lista1: [string, boolean, number] = ['gian', true, 27]

//podemos tbm adicionar um nome para cada tipo de valor como por exemplo.
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

//sobre uniontype(união de tipos). Com o uniontype a gente consegue que avariavel aceite mais de um tipo, utilizando o sinal de pipe (|) para separar os tipos. ex:
let idadeDaAna: number | string = 25 
//assim a idade da ana tbm pode receber um valor string como (idadeDaAna = '25 anos')
idadeDaAna = '25 anos'

//conhecendo o tipo (any), geralmente ele é utilizado quando fazemos uma integração ali com o backend e não temos certeza de qualtipo de dados que o backend vai nos devolver, nesse caso utilizamos (any).
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1, 2, 3]
dadosDaApi = 'string'

//o typoescript conhece os tipos de valores então ele tbm conhecerá as tipagens explicitas, como esse exemplo.
let curso = 'front-end'
//aqui ele vê que a variavel é uma string e da ero quando color numeral. mas o melhor é colocar explicito o que é o que. igual nos exemplo a cima.
//curso = 10