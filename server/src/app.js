var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    console.log("OTRZYMALISMY REQUESTA")
    res.status(200).send("Welcome to our restful API");
});
app.post("/welcome", function(req, res) {
  var name = req.body.name;
res.status(200).send("welcome " + name );
});

app.listen(3000, function() {
  console.log("SERVER STARTED");
});


/*

fetch("http://localhost:3000/welcome",{ 
method: 
'POST', 
headers: 
{ 'Content-Type': 'application/json'},
body: 
JSON.stringify({a: 1, name: 'chlebulson'})
}).then(res => res.text()).then(res => console.log(res));

*/