/*
//FUNCOES
função comum
function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);
}


let resultado = calc(1, 2, "*");

console.log(resultado);*/


/*função anonima
(function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);
})()


resultado2 = calc(3, 4, "*")

console.log(resultado2);*/


/*arrow function
let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);
}


let resultado3 = calc(1, 2, "*")

console.log(resultado3);*/






//EVENTO
//adiciona o evento quando a janela estiver em foco do usuário
window.addEventListener('focus', event => {
    console.log('focou (evento: focus)');
});

//adiciona um evento ao clique do usuário NO DOCUMENTO
document.addEventListener('click', event => {
    console.log('clicou (evento: clique)');
})

//criando a variavel com as informações da dataa
let agora = new Date();

//registra no console a data armazenada no agora, e através do "toLocaleDataString", ele formata no padrão do país passado dentro de (""), sendo também possível manipular de outras formas
console.log(agora.toLocaleDateString("pt-br"));






//ARRAYS
//cria o array ao qual, recebe varios valores de diferentes tipos
let carros = ["palio 98", "toro", "strada", "uno"];

console.log('array carros: HCODE');

//exibe todos os valores do array
console.log('array bruto');
console.log(carros, "array bruto");

//exibe o primeiro valor do array, tendo em vista que começa em 0
console.log('valor do array de acordo com o indice');
console.log(carros[0]);

//exibe quantos valores foram atribuidos ao array, contando com o 0
console.log('quantidade de valores dentro do array');
console.log(carros.length);

console.log('indice e conteudo de cada valor do array: ForEach');
carros.forEach(function (value, index) {
    console.log(index, value);
})


//array criado pelo aluno
let sala = ["pedro", "tiago", "lucas", "joao", "maria", "sara", "julia", "ana"];

console.log('array criado pelo aluno')
console.log('indice e conteudo de cada valor do array: ForEach');

sala.forEach(function (value, index) {
    console.log(index, value);
})






//OBJETOS
console.log("criando o objeto celular")
//criando a classe
class celular {
    //chamando o método construtor(funcao), e passando os atributos da classe (cor)
    constructor() {
        this.cor = "prata"
    }

    //criando o método ligar e passando suas instruções
    ligar() {
        console.log("uma ligação");
        return "ligando";
    }
}

let objeto = new celular();

//exibindo o objeto e seus atributos
console.log('exibindo o objeto e seus atributos')
console.log(objeto)

//exibindo o atributo escolhido
console.log('exibindo o atributo escolhido')
console.log(objeto.cor)

//exibindo um método
console.log('exibindo um método')
console.log(objeto.ligar());