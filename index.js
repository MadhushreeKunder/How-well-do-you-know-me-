
var readlineSync = require('readline-sync');
const chalk = require('chalk');


var score = 0;

var userName = readlineSync.question(chalk.bgMagenta("Please enter your name--- "));

console.log(chalk.yellowBright("Welcome " + userName + "! Let's see how well you know Madhushree") );
console.log("            ");

var start = readlineSync.question("To start quiz, press any key-- ");

console.log("            ");

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer){
    console.log(chalk.green("You got it right! :D"));
    console.log("            ");
    score++;
  }else {
    console.log(chalk.red("You got it wrong :("));
    console.log("            ");
  }
};



var questions = [{
  question: "What is my favourite dessert? ",
  answer: "gulab jamun"
},{
  question: "Which is my favourite anime? ",
  answer: "a place further than the universe"
},{
  question: "Where is my native place? ",
  answer: "karnataka"
},{
  question: "Which mobile phone do i use? ",
  answer: "motorola"
},{
  question: "What is my favorite color? ",
  answer: "violet"
},{
  question: "What is the name of my group? ",
  answer: "innovation beasts"

}];


for (var i=0; i<questions.length; i++){
  var currentQuestionNumber = questions[i];
  quiz(chalk.cyanBright(currentQuestionNumber.question), currentQuestionNumber.answer)
};


if(score>2){
  console.log(chalk.bgYellow("Yaayyy! Your score is: "+score)); 
}else{
  console.log(chalk.bgRed("Hmmm, your score is: "+score)); 

};

