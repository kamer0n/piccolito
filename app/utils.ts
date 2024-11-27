export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};
