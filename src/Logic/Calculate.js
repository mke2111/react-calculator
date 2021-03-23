/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (calculatorInput, buttonName) => {
  let { total, next, operation } = calculatorInput;

  switch (buttonName) {
    case '+':
    case '*':
    case '-':
    case '/':
      if (total !== null) {
        operation = buttonName;
      }
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === null) {
        total === null ? total = buttonName : total += buttonName;
      } else if (operation !== null) {
        next === null ? next = buttonName : next += buttonName;
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      if (total && !next) {
        total /= 100;
        total.toString();
      } else if (total && next) {
        operation = buttonName;
      }
      break;
    case '.':
      if (operation !== null) {
        if (next === null) {
          next = `0${buttonName}`;
        } else if (!next.includes(buttonName)) {
          next += buttonName;
        }
      } else if (operation === null) {
        if (total === null) {
          total = `0${buttonName}`;
        } else if (!total.includes(buttonName)) {
          total += buttonName;
        }
      }
      break;
    case '+/-':
      total *= -1;
      total.toString();
      if (next) {
        const result = next * -1;
        next = result.toString();
      }
      break;
    default:
      if (next && total) {
        total = operate(total, next, operation);
        operation = null;
        next = null;
      }
  }
  const final = { total, next, operation };
  return final;
};

export default calculate;
