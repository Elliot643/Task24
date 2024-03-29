const express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));

var path = require("path");

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname+"/public/index.html"));
});

var data = require("./public/data.json");
app.get("/data", (req, res) => {
	res.json(data);
});

app.listen(process.env.PORT || 8080);