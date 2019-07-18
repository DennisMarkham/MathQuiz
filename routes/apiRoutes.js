var path = require("path");

module.exports = function(app) {

app.get("/api/result", function(req, res) {
    res.sendFile(path.join(__dirname, "./result.html"))
  });
//gotta figure out how to make this go to results
}