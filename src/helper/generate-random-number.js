const generateRandomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min) + min);

export default generateRandomNumber;
