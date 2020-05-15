var read = require('readline-sync');

var nome = read.question('Qual é o seu nome? ');
var idade = read.questionInt('Qual é a sua idade? ');


console.log(`${nome} nasceu em ${2020-idade}`);

