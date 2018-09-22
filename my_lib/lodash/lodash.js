var _ = require('lodash');

// LOOP N TIMES
//_.times(num, function()) 
var loop = _.times(5, function(x){
  return x;
});

console.log("lodash loop N times: " + loop); // 0,1,2,3,4


//LOOP TROUGH A COLLECTION and return a deeply-nested property from each item
// _.map(obj, property)
var sithArr = [
  {"darthName": "Darth Vader",
  "favouriteLightSabers": [{color:"red"}, {color:"light blue"}]
  },
  {"darthName": "Darth Sidious",
  "favouriteLightSabers": [{color:"red"}, {color:"gliterr pink"}]
  },
]

var secret = _.map(sithArr,'favouriteLightSabers[1].color');
console.log(secret); //[ 'light blue', 'gliterr pink' ]


// CREATE AN ARRAY OF N SIZE and populate them with unique values of the same prefix
// _.times(num, _.partial(_.uniqueId, 'text'))
//bind: var stormtrooper = _.times(4,_.uniqueId.bind(null,"stormtrooper nr. "));
var stormtrooper = _.times(4, _.partial(_.uniqueId, "stormtrooper nr. ")); //_.partial()
console.log(stormtrooper);


//RANDOM NUMBER BETWEEN RANGE
// _.random(x,y)
var random = _.random(13, 20);
console.log("random number: " + random);


//EXTENDING OBJECTS
// _.assign(obj1,obj2)
var obj1 = {name:"menda sunsiad", car: "passat"};
var obj2 = {name:"Janusz"};
var obj3 = {hobby:"i cyk piwerko"};

var stealTheCar = _.assign(obj1, obj2, obj3);
console.log(stealTheCar);

//REMOVE KEYS FROM OBJECTS
// _.omit(obj, [key1, key2])
var pet = {animal:"dog", name:"rusty", age: 13};
pet = _.omit(pet, ['name', 'age']);
//pet = _.omit(pet,_.isNumber);
console.log(pet);


//SELECT PROPERTIES FROM ANOTHER OBJECT TO CREATE NEW ONE
// _.pick(obj, [key1,key2])
var sunsiad = {car:'passat', wife:'Grażyna', money: '300zł'};
var janusz = _.pick(sunsiad, ['car','money']);
console.log(janusz);


//SELECTIN ONE OR MORE RANDOM ITEMS FROM A LIST
// _.sample(array)
var familiadaSquad = ['Grażyna', 'Janusz', 'Seba', 'Pioter', 'Menda Sunsiad'];
var select = _.sample(familiadaSquad);
console.log(select);
