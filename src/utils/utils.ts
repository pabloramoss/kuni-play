export const generateWinningNumbers = (): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < 3) {
    numbers.add(Math.floor(Math.random() * 40) + 1);
  }
  console.log(numbers);
  return Array.from(numbers);
};
