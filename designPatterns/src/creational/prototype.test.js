import Car from './prototype';

test('change color of a car', () => {
  const myCar = new Car('Citroen', 'AX');

  const result = myCar.changeColor('white');

  expect(result).toBe('I like white Citroen AX!');
})