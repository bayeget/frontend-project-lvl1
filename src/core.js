import readlineSync from 'readline-sync';

let gameStepCount = 1;

const coreGame = (description, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  while (gameStepCount <= 3) {
    const [gameQuestion, correctAnswer] = generateQuestionAndAnswer();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      gameStepCount = 5;
    }
    gameStepCount += 1;
  }

  if (gameStepCount === 4) console.log(`Congratulations, ${userName}!`);
};

export default coreGame;
