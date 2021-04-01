import readlineSync from 'readline-sync';

let gameStepCount = 1;

const processGame = (userName, getQuestionAndAnswer) => {
  const [gameQuestion, correctAnswer] = getQuestionAndAnswer();

  // todo: убрать правильный ответ
  console.log(`Question: ${gameQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === String(correctAnswer)) {
    if (gameStepCount < 3) {
      gameStepCount += gameStepCount;
      processGame(userName, getQuestionAndAnswer);
    } else console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

const coreGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  processGame(userName, getQuestionAndAnswer);
};

export default coreGame;
