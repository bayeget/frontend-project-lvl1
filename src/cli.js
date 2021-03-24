import readlineSync from 'readline-sync';

export const greetingText = () => {
  console.log('Welcome to the Brain Games!');
};

export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
