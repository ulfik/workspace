import BuildYourOwnPony from './builder';

test('Build your own pony', () => {
  const result = new BuildYourOwnPony()
    .withName('Applejack')
    .withColor('orange')
    .withTail('yellow')
    .withButtStamp('three apples')
    .build();
  
  expect(result).toEqual({
    name: 'Applejack',
    color: 'orange',
    tail: 'yellow',
    buttStamp: 'three apples'
  });
})

test('Build your own pony', () => {
  const result = new BuildYourOwnPony()
    .build();
  
  expect(result).toEqual({
    name: 'sad pony without name',
    color: 'brown',
    tail: 'omg there is no tail here',
    buttStamp: 'clear butt'
  });
})