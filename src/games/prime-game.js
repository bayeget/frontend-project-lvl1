import coreGame from '../core.js';
import getRandomNumber from '../helper/get-random-number.js';

let correctAnswer;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const questionNumber = getRandomNumber(2, 100);

  if (isPrime(questionNumber)) correctAnswer = 'yes';
  else correctAnswer = 'no';

  return [questionNumber, correctAnswer];
};

const primeGame = () => {
  coreGame(gameDescription, getQuestionAndAnswer);
};

export default primeGame;
