import Big from 'big';

const operate = (firstNumber, secondNumber, operation) => {
  let total;
  const first = new Big(firstNumber);
  const second = new Big(secondNumber);

  switch (operation) {
    case '+':
      total = first.plus(second);
      break;
    case '-':
      total = first.minus(second);
      break;
    case '*':
      total = first.times(second);
      break;
    case '/':
      total = secondNumber === 0 ? 'Math Error' : first.div(second);
      break;
    case '%':
      total = first.mod(second);
      break;
    default:
      throw Error('Unknown operation!');
  }
  const result = total.toString();
  return result;
};

export default operate;
