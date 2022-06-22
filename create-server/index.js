//Carregando módulo
// const http = require('http');

//chama o htpp internamente
const express = require('express')

let app = express();

//cria a rota /
app.get('/', (req, res) =>{
    //código de que o cliente conseguiu acessar
    res.statusCode(200)
    //especifica o header, para mostrar que é um HTML
    res.setHeader('Content-Type', 'text/html');
    //responde um em html
    res.end('<h1>OK</h1>');
});
  




//cria a rota  users
app.get('/users', (req, res) => {
    //código de que o cliente conseguiu acessar
    res.statusCode(200)
    //especifica o tipo de conteúdo a ser exibido(JSON)
    res.setHeader('Content-Type', 'application/json');
    //responde um em JSON
    res.json({
        users: [{
            name: 'hcode',
            email: 'ryanoliveiraGualberto@gmail.com'
        }]
    });
});


//criação do servidor e armazenado na variavel, req: requisições feitas para o server, res: resposta do servidor
// let server = http.createServer((req, res) => {
//     //requisita a url para o serivdor e registra no console
//     console.log('URL:', req.url);
//     //requisita o metodo para o serivdor e registra no console
//     console.log('METHOD', req.method);
// });


// a variavel do servidor fica escutando a porta 300 e o IP, e registra no console o sucesso caso o servidor suba com sucesso
app.listen(3000, '127.0.0.1', () => {
    console.log("SERVIDOR RODANDO!!");
});
