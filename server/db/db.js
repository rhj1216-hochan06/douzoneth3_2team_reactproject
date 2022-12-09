var maria = require('mysql');
const conn = maria.createConnection({
    host:'localhost',
    port: 3306,
    user:'macms',
    password: 'mariadb',
    database: 'KOSA'

});
module.exports = conn;