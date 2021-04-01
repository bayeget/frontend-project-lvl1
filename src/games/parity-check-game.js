import coreGame from '../core.js';
import getRandomNumber from '../helper/get-random-number.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNumber = getRandomNumber(0, 10);
  let correctAnswer;

  if (questionNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';

  return [questionNumber, correctAnswer];
};

const parityCheckGame = () => {
  coreGame(gameDescription, getQuestionAndAnswer);
};

export default parityCheckGame;
