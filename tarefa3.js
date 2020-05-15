var ler = require("readline-sync")
var nome;
nome = ler.question("Qual é seu nome?\n")

var nota1 = ler.questionInt("Qual a nota 1? ")
var nota2 = ler.questionInt("Qual a nota 2? ")




var p1 = 0.3
var p2 = 0.7
console.log(`${nome},sua media é = ${p1*nota1 + p2*nota2}`)
