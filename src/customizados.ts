//tipos customisados. Podemos fazer com que o comportamento do TS de conhecer a nossa estrutura do objeto seja feita de forma explicita.
type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}
//podemos colocar essa estrutura que fizemos de (aluno) dentro de alunos.
const alunos: aluno[] = [ //dizendo que esse estrutura de array (alunos) vai ser o array (aluno).
    {
        nome: "Carlos",
        cursos: ["Front-end", "UI/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    }
]
//o TS ja identifica que temos alunos como sendo customizado.
//para adicionar um novo alumo exemplo (Julia). teremos que colocar um objeto. respeitando a estrutura criada dentro do array acima.
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

//podemos tbm utilizar o (aluno) em um objeto.
const novoAluno: aluno = { //uma dica muito importante é usar o (ctrl + espaço), teremos o autocomplete para facilitar o preenchimento e mostrar as propriedades que esse tipo aceita.
    nome: "Lucas",
    idade: 32, //tbm temos a possibilidade de termos propriedades opicionais (?), colocando ? na propriedade que deseja essa função, como a do curso em type.
}

//podemos usar (aluno) em diversos lugares como por exemplo nas funções.
function exibeAluno(aluno: aluno) { //a partir desse argumento eu sei que ele tem a propriedade nome dentro dele.
    console.log(aluno.nome)
}