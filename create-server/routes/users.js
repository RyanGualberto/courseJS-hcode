let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

//exporta o módulo, permitindo a importação em outros arquivos
module.exports = (app) => {

    let route = app.route('/users');
    //cria a rota  users
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

    route.post((req, res) => {
        // //código de que o cliente conseguiu acessar
        // res.statusCode = 200;
        // //especifica o tipo de conteúdo a ser exibido(JSON)
        // res.setHeader('Content-Type', 'application/json');
        //responde um em JSON
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res)
            }
            else {
                res.status(200).json(user);
            }
        });
    });
    let routeId = app.route('/users/:id');

    routeId.get((req,res) => {
        db.findOne({
            _id:req.params.id
        }).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res)
            }
            else {
                res.status(200).json(user);
            }
        });
    });

};