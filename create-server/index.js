//Carregando módulo
// const http = require('http');

//chama a dependencia instalada 'express' e cria o http internamente
const express = require('express');
//chama a dependencia instalada 'consign'
const consign = require('consign');
//chama a dependencia instalada 'body parse'
const bodyParser = require('body-parser');
//procura dentro do projeto a pasta desejada
// let routesIndex = require('./routes/index')
// let routesUsers = require('./routes/users')

let app = express();

app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

//chama o consign, pede pra incluir as pastas selecionadas para dentro do app, 
consign().include('routes').include('utils').into(app);
//declara para o app os arquivos armazenados nas variavéis para ser usado pelo server
// app.use(routesIndex);
// app.use('/users',routesUsers);

// a variavel do servidor fica escutando a porta 300 e o IP, e registra no console o sucesso caso o servidor suba com sucesso
app.listen(3000, '127.0.0.1', () => {
    console.log("SERVIDOR RODANDO!!");
});







//criação do servidor e armazenado na variavel, req: requisições feitas para o server, res: resposta do servidor
// let server = http.createServer((req, res) => {
//     //requisita a url para o serivdor e registra no console
//     console.log('URL:', req.url);
//     //requisita o metodo para o serivdor e registra no console
//     console.log('METHOD', req.method);
// });


