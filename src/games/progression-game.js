import coreGame from '../core.js';
import getRandomNumber from '../helper/get-random-number.js';

let correctAnswer;
const gameDescription = 'What number is missing in the progression?';

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

const getQuestionAndAnswer = () => {
  const progression = getProgression();

  return [progression, correctAnswer];
};

const progressionGame = () => {
  coreGame(gameDescription, getQuestionAndAnswer);
};

export default progressionGame;
