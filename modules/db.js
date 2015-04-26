var mysql = require('mysql');

var pool = mysql.createPool({
    // host: '127.0.0.1',
    // user: 'chuangshiji',
    // password: 'csj2015',
    host: 'acrow.csj1wx5zpdso.us-west-2.rds.amazonaws.com',
    user: 'acrow',
    password: 'albbh40dd',
    database: 'trumpet',
    port: 3306
});

exports.Exec = function(sql, callback) {
this.getConnection(function(err, connection) {
        if(err) {
            callback(err);
        } else {
            connection.query(sql, function(err, result) {
                callback(err, result);
                connection.release();
            });
        }
    })
}.bind(pool);