export default (value: string | number) => {
  const numbers = value.toString().replace(/[^0-9]/g, '');
  return numbers ? Number(numbers).toLocaleString('ko-kr') : '';
};
