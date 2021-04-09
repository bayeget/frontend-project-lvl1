import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const defineDivisors = (num) => {
  const divisors = [];

  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
};

const defineGCD = (firstDivisors, secondDivisors) => {
  for (let i = 0; i < firstDivisors.length; i += 1) {
    if (secondDivisors.includes(firstDivisors[i])) {
      return firstDivisors[i];
    }
  }
  return false;
};

const generateQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const firstNumberDivisors = defineDivisors(firstNumber);
  const secondNumberDivisors = defineDivisors(secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = defineGCD(firstNumberDivisors, secondNumberDivisors);

  return [question, correctAnswer];
};

const gcdGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default gcdGame;
