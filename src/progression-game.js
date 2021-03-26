import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

let correctAnswer;

const getProgression = () => {
  const progression = [];
  const startProgression = getRandomNumber(0, 100);
  const stepProgression = getRandomNumber(1, 10);
  const lengthProgression = getRandomNumber(5, 10);
  const findNumberProgression = getRandomNumber(1, lengthProgression);
  let progressionMember = startProgression;

  for (let i = 0; i <= lengthProgression; i += 1) {
    if (i === findNumberProgression) {
      progression.push('..');
      correctAnswer = progressionMember;
    } else progression.push(progressionMember);

    progressionMember += stepProgression;
  }

  return progression.join(' ');
};

const progressionGame = () => {
  const progression = getProgression();

  console.log(`Question: ${progression}`);

  const userAnswer = readlineSync.question('Your answer: ');

  return [+userAnswer, correctAnswer];
};

export default progressionGame;
