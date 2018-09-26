import state from './state';

const {Cat, TiredState, RestedState} = state;
  let cat;

beforeEach(() => {
  cat = new Cat();
});

test('cat catched mouse when is rested', () => {
  const result = cat.hunt();

  expect(result).toBe('Catched mouse');
})

test('cat catched nothing when is tired', () => {
  cat.state = new TiredState();

  const result = cat.hunt();

  expect(result).toBe('Catched nothing');
})

test('cat is tired after run', () => {
  cat.run();

  expect(cat.state).toBeInstanceOf(TiredState);
})

test('cat is rested after sleep', () => {
  cat.sleep();

  expect(cat.state).toBeInstanceOf(RestedState);
})