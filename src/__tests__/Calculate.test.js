import calculate from '../Logic/Calculate';

describe('calculate', () => {
  it('All parameters are null when AC is triggered', () => {
    const result = calculate({ total: 1, next: 2, operation: '/' }, 'AC');
    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('next');
    expect(result).toHaveProperty('operation');
    expect(result.total).toEqual(null);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });

  it('Result is a negative number if initial number was positive', () => {
    const result = calculate({ total: 2, next: null, operation: '+' }, '+/-');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(-2);
  });

  it('When * is clicked, the result total is a multiple of total and next values', () => {
    const result = calculate({ total: '12', next: '2', operation: '*' }, '*');
    expect(result).toHaveProperty('operation');
    expect(result.operation).toEqual('*');
    expect(result.total * result.next).toEqual(24);
  });

  it('Result is a positive number if initial number was negative', () => {
    const result = calculate({ total: -2, next: null, operation: '+' }, '+/-');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(2);
  });

  it('When the next number is 5 and a decimal point is pressed, next becomes 5.', () => {
    const result = calculate({ total: null, next: '5', operation: '+' }, '.');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('5.');
  });

  it('When = is clicked, and total is not null and next is not null, it returns an operated result', () => {
    const result = calculate({ total: '12', next: '3', operation: '*' }, '=');
    expect(result).toHaveProperty('total');
  });

  it('When total and operation are not null, and next is null, it returns a next = 0 when 5 is clicked', () => {
    const result = calculate({ total: 19, next: 1, operation: '+' }, '2');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('12');
  });

  it('When passed a %, it returns a percentaged number', () => {
    const result = calculate({ total: 23, next: null, operation: null }, '%');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual(0.23);
  });

  it('When a btn of 0 is clicked, and total is null, operation is null and next is null, it returns a total = "0"', () => {
    const result = calculate({ total: null, next: null, operation: null }, '0');
    expect(result).toHaveProperty('total');
    expect(result.total).toEqual('0');
  });

  it('When total and operation are not null, and next is null, it returns a next = 0, it returns a next = "0"', () => {
    const result = calculate({ total: 1, next: null, operation: '+' }, '1');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('1');
  });
});
