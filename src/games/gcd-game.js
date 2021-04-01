import coreGame from '../core.js';
import getRandomNumber from '../helper/get-random-number.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const defineDivisors = (num) => {
  const divisors = [];

  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const firstNumberDivisors = defineDivisors(firstNumber);
  const secondNumberDivisors = defineDivisors(secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  let correctAnswer;

  for (let i = 0; i < firstNumberDivisors.length; i += 1) {
    if (secondNumberDivisors.includes(firstNumberDivisors[i])) {
      correctAnswer = firstNumberDivisors[i];
      break;
    }
  }

  return [question, correctAnswer];
};

const gcdGame = () => {
  coreGame(gameDescription, getQuestionAndAnswer);
};

export default gcdGame;
