//funkcja wywołania zwrotnego - funkcja zostaje przekazana jako parametr do innej funkcji

function potega(wartosc, callback){
  if(callback){
    callback(wartosc * wartosc);
  }else{
    console.log("Otrzymujemy wynik: " + wartosc + " ponieważ, nie ma callback.");
  }
}


potega(10, function(wynik){
  console.log(wynik);
});

potega(10, function(wynik){
  console.log("Odejmujemy jeden od wyniku w funkcji - otrzymujemy: " + (wynik - 1));
});

potega(10);