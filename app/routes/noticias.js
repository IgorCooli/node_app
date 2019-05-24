
var mysql = require('mysql');   
module.exports = function(app){

    app.get('/noticias', function(req, res){

        

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password  : '1213',
            database : 'portal_noticias'
        });

        connection.connect();

        connection.query('select * from noticias', function(error, result){
            if (error) throw error;
            res.send(result);
        });

        //res.render("noticias/noticias");
    });
};

