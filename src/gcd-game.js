import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

let correctAnswer;

const defineDivisors = (num) => {
  const divisors = [];

  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0) divisors.push(i);
  }

  return divisors;
};

const gcdGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const firstNumberDivisors = defineDivisors(firstNumber);
  const secondNumberDivisors = defineDivisors(secondNumber);

  for (const divisor of firstNumberDivisors) {
    if (secondNumberDivisors.includes(divisor)) {
      correctAnswer = divisor;
      break;
    }
  }

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');

  return [+userAnswer, correctAnswer];
};

export default gcdGame;
