var msql = require("mysql");
const { prototype } = require("module");

const connection = mysql.createConnection({
    host: "localhost",
port: 8080
user: "root",
password: "Hurley2012#_!",
database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
    console.error("Error connecting" + err.stack);
    return;
}
console.log("connection id" + connection.threadId)
});


module.exports = connection;