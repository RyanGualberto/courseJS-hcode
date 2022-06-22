//armazenando informação da mensagem na variavel
var olaMundo = "Olá Mundo"

console.log(olaMundo);
/*  
    adicionando comentário
    console.log(olaMundo);
*/
console.log(olaMundo);
console.log(olaMundo);


let a = 10;
let b = 20;

//comparara o valor
console.log(a == b)

let c = 10;
let d = "10";

//compara o valor e o tipo da variavel
console.log(c === d)

//verifica se os valores são diferentes
console.log(c != d)

//verifica se o valor de a é igual ao valor de b e se o tipo de b é uma string
console.log(a == b && typeof b == 'string')

//verifica se o valor de a é igual ao valor de b OU se o tipo de b é uma string
console.log(a == b || typeof b == 'string')


//declara o valor de cor
let cor = 'verde';

//verifica e executa um bloco de instrução, dependendo da cor declarada.
if (cor === 'verde') {
    console.log('siga (if/ else if)')
} else if (cor === 'amarelo') {
    console.log('atenção (if/ else if)')
} else if (cor === 'vermelho') {
    console.log('pare (if/ else if)')
} else {
    console.log('cor invalida (if/ else if)')
}

//verifica e executa um bloco de instrução, dependendo da cor declarada.
//
switch (cor) {
    case 'verde':
        console.log('siga (switch)')
        break;
    case 'amarelo':
        console.log('amarelo (switch)');
        break;
    case 'vermelho':
        console.log('pare (switch)')
        break;
    default:
        console.log('não sei (switch)')
        break;
}

//declarando o valor de n
let n = 4;

console.log('tabuada')

//criando um laço de repetição que enquanto i for menor que 11, ele irá se multiplicar com o valor de n
for (let i = 0; i < 11; i++) {
    console.log(` ${i} X  ${n} = ${i*n}`);
    
}