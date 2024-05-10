const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//andpont /oi = Olá mundo mn
app.get('/oi', function (req, res) {
  res.send('Olá Mundo mn')
})

app.listen(3000, function (){
  console.log("Aplicação Rodando em http://localhost:3000")
})