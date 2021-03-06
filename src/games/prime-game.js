import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateQuestionAndAnswer = () => {
  const questionNumber = generateRandomNumber(2, 100);

  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return [questionNumber, correctAnswer];
};

const primeGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default primeGame;
