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




app.listen(3000, function(){
  console.log("Listening NOW")
})
