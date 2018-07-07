var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    };
    
    console.log("connected as id " + connection.threadId);
});

app.get("/home", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
        if (err) {
            return res.status(500).end();
        };
    res.render("home");
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});