//transform the string roman numeral into an integer 
function solution(roman){
  M=1000
  MM=2000
  MMM=3000
}

/*
//Is Prime
function isPrime(num) {
  var root = Math.sqrt(num);

  if (num < 2)
    return false;

  for(var i=2; i<=Math.floor(root); i++){
    if(num % i === 0)
      return false;
  }

  return true;
}
console.log(isPrime(0));



/*
//IP validation
function isValidIP(str) {
  var newArray = str.split(".");
  
  if(newArray.length !== 4)
    return false;

  if(str.includes(" "))
    return false;
  
  var isDecimal = newArray.map(Number).every(element=>
    element <= 255 && element >= 0
  );

  var zero = newArray.every(element=>{
    if(element.length === 1)
      return true;
    
    return element[0] > 0;
  });

  if(isDecimal && zero)
    return true;

  return false;
}

console.log(isValidIP("245.0.4 .3"));



//growth of population
function nbYear(p0, percent, aug, p) {
  var years = 0;
  do  {
      p0 += p0 * (percent/100) + aug;
      years++;
  } while(p0<p);
  
  return years;
}
console.log(nbYear(2, 50, 0, 6));

/*
//rgb to hex

function rgb(r, g, b){
  var colors =  [r, g, b].map((color) =>
    color<0 ? "0" : color
  ).map((color) =>
    color>255 ? "FF" : color
  )

  var hexColors = colors.map((color) =>
    (color<16 ? "0" : "") + color.toString(16).toUpperCase()
  )
	return  hexColors.join("");
}
console.log(rgb(-5, 233, 15));



//Sort the odd
function sortArray(array) {
  var oddArray = [];
  var j = 0;

  for(var i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      oddArray.push(array[i]);
    }
  }
  oddArray.sort((a, b)=>{return a-b});

  for(var i=0; i<array.length; i++){
    if(array[i] % 2 !== 0){
      array[i] = oddArray[j];
      j++;
    }
  }
  
  return array;
}

console.log(sortArray([1, 3, 11, 8, 111, 4]));


//Format a string of names like 'Bart, Lisa & Maggie'.
function list2(names){
  let result = "";

  if(!names.length)
    return result;

  if(names.length === 1)
    return names[0].name;
  
  for (var i=0; i<names.length - 1; i++){
    result += names[i].name + ", ";
  }

  return result.slice(0,-2) + " & " + names[i].name;
}

function list(names){
  return names.reduce(function(previousValue, nameWrapper, index) {
    
    // rozwiazanie krotkie, ale nieczytelme, bo if w ifie (czli ? w ?)
    let rest = index === names.length - 1 ? "" : (index === names.length - 2 ? " & " : ", ")  
    return previousValue + nameWrapper.name + rest;
    

    // rozwiazanie czytene, bo widac co sie dzieje
    
      let currentValue = previousValue + nameWrapper.name; 

    if (index === names.length - 1)
      return currentValue;
    
    if (index === names.length - 2)
      return currentValue + " & ";

    return currentValue + ", ";
    
  }, "");
}


[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
console.log(list([]));



//Build a pile of Cubes
//n^3 + (n-1)^3 + ... + 1^3
function findNb(rest) {
  let floorNum = 1;
  do {
    rest -= Math.pow(floorNum, 3);
    floorNum++;
  } while (rest > 0);
  
  if(rest === 0)
    return --floorNum;
  
  
  return -1;
}
console.log(findNb(1071225));





//Find middle letter
function getMiddle(s){
  var division = Math.floor(s.length/2);
  if (s.length % 2 !== 0){
    return s[division];
  } else if (s.length % 2 === 0){
    return s[division-1] +
    s[division];
  }
  return s;
  
}
console.log(getMiddle("test"));


//Categorize new member of senior club

function openOrSenior(data){
  var newArray = [];
  for(var i=0; i<data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      newArray.push("Senior");
    } else {
      newArray.push("Open");
    }
  }
  return newArray;
}
console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]));

function forEachOpenOrSenior(data) {
  var newArray = [];
  data.forEach(function(element){
    if(element[0] >= 55 && element[1] > 7){
      newArray.push("Senior");
    } else {
      newArray.push("Open");
    }
  });
  return newArray;
}

console.log(forEachOpenOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]));

function mapOpenOrSenior(data){
  var newArray = data.map(function(element){
    if(element[0] >= 55 && element[1] > 7){
    return "Senior";
    } else {
    return "Open";
    }
  });
  return newArray;
}

console.log(mapOpenOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]));


//best solution - ??????????????????????
function bestSolutionOpenOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


//comments censoring 
function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  newStr = "";
  x = 0;
  for (var i=0; i<str.length; i++){
    for (var j=0; j<vowels.length; j++){
      if(str[i].toUpperCase() === vowels[j].toUpperCase()){
          var slice = str.slice(x, i);
          newStr = newStr + slice;
          x=i+1;
      }
    }
  }
  str = newStr + str.slice(x, str.length);
  return str;
}
console.log(disemvowel("This website is for losers LOL!"));


//function accum
function accum(s) {
  var result = "";
  
	for (var i=0; i<s.length; i++){
    // recieve letter
    var letter = s.charAt(i);
    // repeat letter
    var repeat = letter.repeat(i);
    // letter order
    var letterOrder = letter.toUpperCase() + repeat.toLowerCase();
    //add to result
    result += "-" + letterOrder;
  };
  return result.slice(1,result.length);
}

console.log(accum("ulfik"));

//function count vowels
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i=0; i<str.length; i++){
    for (var j=0; j<vowels.length; j++){
      if (str[i] === vowels[j]){
      vowelsCount += 1;
      }
    }
  }
  return vowelsCount;
}

console.log(getCount("ulfik"));*/