import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

let correctAnswer;

const isPrime = (num) => {

  for (let i = 2; i < num; i++ ) {
    if (num % i === 0) return false
  }

  return true
}

const primeGame = () => {
  const questionNumber = getRandomNumber(2, 100);

  if (isPrime(questionNumber)) correctAnswer = 'yes'
  else correctAnswer = 'no'

  console.log(`Question: ${questionNumber}`);

  const userAnswer = readlineSync.question('Your answer: ');
  return [userAnswer, correctAnswer];
}

export default primeGame;