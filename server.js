const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express ();

// serving static data from the public dir
app.use(express.static("public"));


app.use(express.urlencoded({extended: true}))

// parse application json
app.use(express.json)

// Setting up Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

const routes = require("./controllers/tacos_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on Port: "+ PORT);
});