var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");
var inquirer = require("inquirer");


var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "",
  database: "quiz_db"
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/new", function(req, res) {

  var newItem = req.body;
  //newItem is the data sent

  console.log(newItem.email + newItem.score);

  
  connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  insertion();
});
// });


function insertion() {
	console.log("Insertion function firing");
	console.log(newItem.email);
  console.log(newItem.time);
  connection.query("INSERT INTO mathquiz (taker, score, timeTaken) VALUES ('" + newItem.email + "', '" + newItem.score + "', '" + newItem.time + "');", function(err, res) {
    if (err) throw err;
    console.log("Insertion function fired.");
    
    connection.end();


    //will putting this here make it go the results page?  That's my current problem
    //it does not go to the results page
  //   app.get("/result", function(req, res) {
  // res.sendFile(path.join(__dirname, "/result.html"));
});
//     //*********
  });
}

});

//putting this here in imitation of the Hot Restaraunt app
//what does it actually do, though?  Will try deleting.
// require("./routes/apiRoutes")(app);
//seems useless.