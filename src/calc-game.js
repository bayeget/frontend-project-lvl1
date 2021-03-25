import readlineSync from 'readline-sync';
import { greetingText, userName } from './cli.js';
import correctAnswerText from './correct-answer-text.js';
import finishGameText from './finish-game-text.js';
import getRandomNumber from './get-random-number.js';
import wrongAnswerText from './wrong-answer-text.js';

greetingText();

const name = userName();
let answer;
let correctAnswerCount = 0;

const getRandomMathOperator = (operator) => {  
  if (operator === 0 ) return '-'
  else if (operator === 1) return '+'
  else return '*'
}

const getAnswer = (operator, firstNumber, secondNumber) => {
  if (operator === 0 ) answer = firstNumber - secondNumber
  else if (operator === 1) answer = firstNumber + secondNumber
  else answer = firstNumber * secondNumber
}

const getMathExpression = () => {
  const operatorNumber = getRandomNumber(0, 3);
  const operator = getRandomMathOperator(operatorNumber);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  getAnswer(operatorNumber, firstNumber, secondNumber);

  return `${firstNumber} ${operator} ${secondNumber}`
}



const gameStep = () => {
  const expression = getMathExpression();
  console.log(`Question: ${expression}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (+userAnswer === answer) {
    correctAnswerText();
    correctAnswerCount += 1;
    if (correctAnswerCount === 3) finishGameText(name);
    else gameStep()
  } else wrongAnswerText(userAnswer, answer);
};

const startCalcGame = () => {
  console.log('What is the result of the expression?');
  gameStep();
};

export default startCalcGame;
