const getRandomInt = (min = 1, max = 100000): number => {
  min = Math.ceil(+min);
  max = Math.floor(+max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
