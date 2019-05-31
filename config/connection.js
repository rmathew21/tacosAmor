// Set up MySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    user: "root",
    password: "Password",
    database: "tacos_db"
});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " +err.stack)
        return;
    };
    console.log("connectd as id " + connection.threadId);
});

module.exports = connection;