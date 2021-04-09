import coreGame from '../core.js';
import generateRandomNumber from '../helper/generate-random-number.js';

let correctAnswer;
const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  let progressionMember = start;

  for (let i = 0; i <= length; i += 1) {
    progression.push(progressionMember);
    progressionMember += step;
  }

  return progression;
};

const hideProgtessionEl = (progression, index) => {
  const newProgression = progression;
  newProgression[index] = '..';
  return newProgression;
};

const generateQuestionAndAnswer = () => {
  const startProgression = generateRandomNumber(0, 100);
  const stepProgression = generateRandomNumber(1, 10);
  const lengthProgression = generateRandomNumber(5, 10);
  const progressionArr = generateProgression(startProgression, stepProgression, lengthProgression);
  const findNumberProgression = generateRandomNumber(1, lengthProgression);
  correctAnswer = progressionArr[findNumberProgression];
  const progressionArrWithHideEl = hideProgtessionEl(progressionArr, findNumberProgression);
  const progression = progressionArrWithHideEl.join(' ');

  return [progression, correctAnswer];
};

const progressionGame = () => {
  coreGame(gameDescription, generateQuestionAndAnswer);
};

export default progressionGame;
