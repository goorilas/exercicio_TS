//no typescript não podemos ter a mesma variavel em dois arquivos, para resolver isso temos que utilizar um conceito chamado namespace.
//que são pastas virtuais dentro do arquivo, usamos para não haver conflitos de nomes iguais.
namespace casting {
    let idade: any = 25;
//para dizer o TS tratar como um tipo numerico usamos o (as).
    (idade as number).toFixed();
//podemos tbm converter para uma string.
    (idade as string).length;
//podemos converter até para um array. esse modo pode quebrar o código(temos que ter cuidade)
    (idade as string[]).forEach (x => {
        console.log(x);
    })
// nesse exemplo a gente pode ter uma variavel do tipo string e depois atribuir um numero na variavel do tipo string.
//convertemos primeiro para um tipo (unknown) e depois convertemos para (string). Temos que ter cuidade fazendo esse tipo de converção, pode quebrar o código tbm.
    let nome: string = 35 as unknown as string;
}