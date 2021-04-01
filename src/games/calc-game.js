import coreGame from '../core.js';
import getRandomNumber from '../helper/get-random-number.js';

const gameDescription = 'What is the result of the expression?';

const getRandomMathOperator = (operator) => {
  let currentOperator = '*';

  if (operator === 0) currentOperator = '-';
  else if (operator === 1) currentOperator = '+';

  return currentOperator;
};

const getAnswer = (operator, firstNumber, secondNumber) => {
  let correctAnswer;

  if (operator === 0) correctAnswer = firstNumber - secondNumber;
  else if (operator === 1) correctAnswer = firstNumber + secondNumber;
  else correctAnswer = firstNumber * secondNumber;

  return correctAnswer;
};

const getQuestionAndAnswer = () => {
  const operatorNumber = getRandomNumber(0, 3);
  const operator = getRandomMathOperator(operatorNumber);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = getAnswer(operatorNumber, firstNumber, secondNumber);

  return [question, answer];
};

const calcGame = () => {
  coreGame(gameDescription, getQuestionAndAnswer);
};

export default calcGame;
