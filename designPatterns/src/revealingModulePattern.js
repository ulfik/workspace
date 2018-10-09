const bankAccount = (function(){
  let accountBalance = 123,
      withdrawMoney = function(money){
        accountBalance -= money;
      },
      enterPinCode = function(money){
        withdrawMoney(money);
      },
      checkAccountBalance = function(){
        return 'You have ' + accountBalance + '$';
      }
  return {
    enterPinCode,
    checkAccountBalance
  };       
})();

export default bankAccount;