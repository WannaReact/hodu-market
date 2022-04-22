export default () => {
  if (global.orderNumber.length === 0) {
    global.orderNumber = [...Array(100000)].map((_, i) => i);
  }
  const numbers = global.orderNumber;
  const rand = Math.floor(Math.random() * numbers.length);
  const now = new Date();
  const output =
    now.getFullYear() * 1_000_000_000 +
    (now.getMonth() + 1) * 10_000_000 +
    now.getDate() * 100_000 +
    numbers[rand];
  numbers[rand] = numbers[numbers.length - 1];
  numbers.pop();
  return output;
};
