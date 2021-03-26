import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

let correctAnswer;

const getRandomMathOperator = (operator) => {
  let currentOperator = '*';

  if (operator === 0) currentOperator = '-';
  else if (operator === 1) currentOperator = '+';

  return currentOperator;
};

const getAnswer = (operator, firstNumber, secondNumber) => {
  if (operator === 0) correctAnswer = firstNumber - secondNumber;
  else if (operator === 1) correctAnswer = firstNumber + secondNumber;
  else correctAnswer = firstNumber * secondNumber;
};

const getMathExpression = () => {
  const operatorNumber = getRandomNumber(0, 3);
  const operator = getRandomMathOperator(operatorNumber);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  getAnswer(operatorNumber, firstNumber, secondNumber);

  return `${firstNumber} ${operator} ${secondNumber}`;
};

const calcGame = () => {
  const expression = getMathExpression();

  console.log(`Question: ${expression}`);

  const userAnswer = readlineSync.question('Your answer: ');

  return [+userAnswer, correctAnswer];
};

export default calcGame;
