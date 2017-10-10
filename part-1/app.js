const express = require("express");
const app = express();

app.get('/', function(req, res){
  res.send("HomePage...")
})

app.listen(3000, function(){
  console.log("Listening NOW")
})
