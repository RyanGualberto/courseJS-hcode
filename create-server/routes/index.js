//exporta o módulo, permitindo a importação em outros arquivos
module.exports = (app) => {

    //cria a rota /
    app.get('/', (req, res) => {
        //código de que o cliente conseguiu acessar
        res.statusCode = 200;
        //especifica o header, para mostrar que é um HTML
        res.setHeader('Content-Type', 'text/html');
        //responde um em html
        res.end('<h1>OK</h1>');
    });

};