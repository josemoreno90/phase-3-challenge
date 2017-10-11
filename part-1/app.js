const express = require("express");
const app = express();

//1st Route (GET Request)
//this route returns supported operators of content type application/json
app.get('/api/supported-operators', function(req, res){
  res.send({
    "/": "division",
    "+": "addition",
    "-": "subtractionn",
    "*": "multiplication"
  })
})

//2nd route (GET Request with query string)
//This route makes GET request and takes a number variable which calculates
//the square of that variable passed in.
app.get('/api/square', function(req, res){
  const number = req.query.number;
  const numberSquared = number * number;
  res.send({'result': numberSquared});
})


app.listen(3000, function(){
  console.log("Listening NOW")
})
