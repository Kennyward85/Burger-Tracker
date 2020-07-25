// server page connecting everything to the proper files middleware
var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js"); 

var PORT = process.env.PORT || 8080
var app = express();

// engine and set were on the npm page description for set up
 app.engine('handlebars', exphbs());
 app.set('view engine', 'handlebars');
 app.use(routes);
 app.use(express.static("public"));
// express middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//  listening to make sure port is working
app.listen(PORT, function() {
    console.log("Listening on Port" , PORT)
});