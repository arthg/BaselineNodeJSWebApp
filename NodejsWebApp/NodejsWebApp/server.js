var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

app.set("view engine", "vash"); // vash view engine

// set the public static resource folder
app.use(express.static(__dirname + "/public"));


app.get("/", function (req, res) {
    res.render("index", { title: "Express + Vash" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({
        name: "Art",
        isValid: false,
        group: "Adminisfuckinstartor"
    });
});

var server = http.createServer(app);


server.listen(3000);
