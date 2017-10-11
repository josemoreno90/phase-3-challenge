const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

//
app.post('/api/compute', function(req,res){
  let result;
  const operator = req.body.operator;
  const operands = req.body.operands;
  switch(operator) {
    case "/":
      result = operands[0] / operands[1];
      break;
    case "+":
      result = operands[0] + operands[1];
      break;
    case "-":
      result = operands[0] - operands[1];
      break;
    case "*":
      result = operands[0] * operands[1];
      break;
    default:
      result = "invalid operator ?. Valid operators are /, +, -, *"
      res.status(404);        // HTTP status 404: NotFound

  }
  const finalResult = {response: {"result": result}};
  res.json(finalResult)
})

app.listen(3000, function(){
  console.log("Listening NOW")
})
