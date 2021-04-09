import readlineSync from 'readline-sync';

let gameStepCount = 1;

const processGame = (userName, getQuestionAndAnswer) => {
  const [gameQuestion, correctAnswer] = getQuestionAndAnswer();

  console.log(`Question: ${gameQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== String(correctAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    gameStepCount = 5;
    return false;
  }
  gameStepCount += 1;
  return true;
};

const coreGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let gameResult;

  while (gameStepCount <= 3) {
    gameResult = processGame(userName, getQuestionAndAnswer);
  }

  if (gameResult) console.log(`Congratulations, ${userName}!`);
};

export default coreGame;
