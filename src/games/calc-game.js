import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

const gameDescription = 'What is the result of the expression?';
const maths = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(maths);

const generateQuestionAndAnswer = () => {
  const operatorNumber = generateRandomNumber(0, 3);
  const operator = operators[operatorNumber];
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = maths[operator](firstNumber, secondNumber);

  return [question, answer];
};

const calcGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default calcGame;
