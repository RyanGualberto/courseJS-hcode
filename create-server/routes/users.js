//exporta o módulo, permitindo a importação em outros arquivos
module.exports = (app) => {

    let NeDB = require('nedb');
    let db = new NeDB({
        filename: 'users.db',
        autoload: true
    });

    //cria a rota  users
    app.get('/users', (req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                console.log(`error:  ${err}`);
                res.status(400).json({
                    error: err
                })
            }
            else {
                //código de que o cliente conseguiu acessar
                res.statusCode = 200;
                //especifica o tipo de conteúdo a ser exibido(JSON)
                res.setHeader('Content-Type', 'application/json');
                //responde um em JSON
                res.json({
                    users
                });
            }
        });


    });

    app.post('/users', (req, res) => {
        // //código de que o cliente conseguiu acessar
        // res.statusCode = 200;
        // //especifica o tipo de conteúdo a ser exibido(JSON)
        // res.setHeader('Content-Type', 'application/json');
        //responde um em JSON
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`erro:  ${err}`);
                res.status(400).json({
                    error: err
                });
            }
            else {
                res.status(200).json(user);
            }
        });
    });

};