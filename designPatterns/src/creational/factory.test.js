import ChocolateFactory from "./factory";

let chocolateFactory;

beforeEach(() => {
  chocolateFactory = new ChocolateFactory();
})

test('make chocolate', () => {
  const result = chocolateFactory.createChocolate('dark', 'sweet milk', 'pineaple');

  expect(result).toMatchObject({
    type: 'dark',
    flavour: 'sweet milk',
    extras: 'pineaple'
  })
})

test('eat chocolate', () => {
  const chocolate = chocolateFactory.createChocolate('dark', 'sweet milk', 'pineaple');
  const result = chocolate.eat();

  expect(result).toBe('omnomnomnom... this is my favourite dark chocolate!');
})