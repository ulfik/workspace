//new Promise(function(resolve,reject){...}) - kiedy wynik jest pozytywny resolve(jakaś_wartość), negatywny rejected(jakaś_wartość); (pending,resolve,reject)

//tworzymy promise
var isLordVaderHappy = false;

var iKillYouFast = new Promise(
  function(resolve,reject){

    if(isLordVaderHappy){
      var death = {
        lightSaber: "on",
        type: "decapitation"
      }
      resolve(death); // gdy wynik jest pozytyny
    } else {
      var reason = new Error("Lord Vader is in a bad mood today. You will die a slow and painfull death.");
      reject(reason); // odrzucono
    }
  }
);

//wywołujemy promise

var upsetVader = function(){
  console.log("before");// dowód - asynchroniczne działanie
  iKillYouFast
    .then(buryMe) // połączenie 1 i 2 promisa
    .then(function(fulfilled){// = resolve(jakaś_wartość)
      console.log(fulfilled);
    })
    .catch(function(error){// = reject(jakaś_wartość)
      console.log(error.message);
    });
    console.log("after");// dowód - asynchroniczne działanie
};


//kolejny promise

var buryMe = function(death){
  var message = "After " + death.type + " bury my dead body.";

  return Promise.resolve(message);
};

upsetVader();


//Why? Because life (or JS) waits for no man.