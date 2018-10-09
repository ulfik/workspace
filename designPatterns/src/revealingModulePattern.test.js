import bankAccount from './revealingModulePattern';

test('Check bank account before withdraw money', () => {
  const result = bankAccount.checkAccountBalance();

  expect(result).toBe('You have 123$');
})

test('Enter pin code, withdraw money and check bank account', () => {
  const withdrawMoney = bankAccount.enterPinCode(50);

  const result = bankAccount.checkAccountBalance();

  expect(result).toBe('You have 73$');
})

test('You can\'t access the private variables', () => {
  const result = bankAccount.accountBalance;

  expect(result).toBeUndefined();
})