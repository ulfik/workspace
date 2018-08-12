function guessingGame(amount){
  const answer = Math.floor(Math.random() * 11);
  var guesses = 0;
   
  return function(guess){
      guesses++;
      if (amount < guesses)
        return "You are all done playing";
      if (guess === answer)
        return "You got it!";
      if (guess < answer)
        return "Your guess is too low!";
      if (guess > answer)
        return "Your guess is too high!";
  }
}

var game = guessingGame(4);
console.log(game(2));
console.log(game(3));
console.log(game(5));
console.log(game(6));
console.log(game(8));
console.log(game(8));