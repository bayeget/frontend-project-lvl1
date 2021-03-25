import correctAnswerText from './correct-answer-text.js';
import finishGameText from './finish-game-text.js';
import wrongAnswerText from './wrong-answer-text.js';
import { greetingText, getUserName } from './cli.js';
import calcGame from './calc-game.js';
import parityCheckGame from './parity-check-game.js';

const gameStep = (gameName, userName, correctAnswerCount) => {
  let gameResult, 
      userAnswer,
      correctAnswer;

  if (gameName === 'brain-even') [gameResult, userAnswer, correctAnswer] = parityCheckGame();
  else if (gameName === 'brain-calc') [gameResult, userAnswer, correctAnswer] = calcGame();
  else console.log('Houston we have a problem');

  if (gameResult) {
    correctAnswerText();
    correctAnswerCount += 1;
    if (correctAnswerCount === 3) finishGameText(userName);
    else gameStep(gameName, userName, correctAnswerCount)
  } else wrongAnswerText(userAnswer, correctAnswer);
}


const startGame = (gameName) => {
  greetingText();
  const userName = getUserName();
  let correctAnswerCount = 0;

  if (gameName === 'brain-even') console.log('Answer "yes" if the number is even, otherwise answer "no".');
  else if (gameName === 'brain-calc') console.log('What is the result of the expression?');
  else console.log('Houston we have a problem');

  gameStep(gameName, userName, correctAnswerCount);

}

export default startGame;
