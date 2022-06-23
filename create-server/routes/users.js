let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

//exporta o módulo, permitindo a importação em outros arquivos
module.exports = (app) => {

    //cria a rota  users a qual resgata todos os dados cadastrados
    let route = app.route('/users');
    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res)
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

    //cria o método de inserção de dados
    route.post((req, res) => {
        // //código de que o cliente conseguiu acessar
        // res.statusCode = 200;
        // //especifica o tipo de conteúdo a ser exibido(JSON)
        // res.setHeader('Content-Type', 'application/json');
        //responde um em JSON

        if (!app.utils.validator.user(app, req, res)) return false;


        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res)
            }
            else {
                res.status(200).json(user);
            }
        });
    });
    //cria a rota users com id
    let routeId = app.route('/users/:id');

    //cria o método de busca por id
    routeId.get((req, res) => {
        // usa o método findOne que buscar por um no banco de dados, através da chave escolhida(id)
        db.findOne({
            _id: req.params.id
        }).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res)
            }
            else {
                res.status(200).json(user);
            }
        });
    });

    //cria o método de update
    routeId.put((req, res) => {
        
        if (!app.utils.validator.user(app, req, res)) return false;

        db.update({
            _id: req.params.id
        },
            //pega os dados do body
            req.body,
            //busca por um erro, caso não tenha envia o stts 200 indicando que a aplicação está funcnionando
            err => {
                if (err) {
                    app.utils.error.send(err, req, res)
                }
                else {
                    res.status(200).json(Object.assign(req.params, req.body));
                }
            });
    });

    //cria o método delete
    routeId.delete((req, res) => {
        db.remove({
            _id: req.params.id
        },
            {},
            err => {
                if (err) {
                    app.utils.error.send(err, req, res)
                }
                else {
                    res.status(200).json(req.params);
                }
            }
        )
    })

};