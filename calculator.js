const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(request, response){
  // response.send("Hello world");
  response.sendFile(__dirname+"/index.html");
})

app.post("/", function(request, response){
  var n1 = Number(request.body.num1);
  var n2 = Number(request.body.num2);
  var result = n1+n2;
  response.send("Addition of the entered two numbers is: "+result);
})

app.get("/bmicalculator", function(request,response){
  response.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(request, response){
  var height = parseFloat(request.body.height);
  var weight = parseFloat(request.body.weight);
  result= (weight/(height*height));
  response.send("BMI is: "+result)
})

app.listen(3000, function(){
  console.log("Server started at 3000");
})
