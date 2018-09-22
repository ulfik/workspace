import singleton from './singleton';

test('Two singleton variables refers to same instances', () => {
  let instance1 = singleton.getInstance();
  let instance2 = singleton.getInstance();

  expect(instance1).toBe(instance2);
})