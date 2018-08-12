var Bankomat = function(wyplata){
  var sumaNaKoncie = 2600; // zmiena prywatna

  var sumaPoWyplaciePieniedzy = function(){
      return "Twój obecny stan konta to: " + (sumaNaKoncie - wyplata) + " zł"; // metoda prywatna
  }

  return {
    kodPin: function(){
      return sumaPoWyplaciePieniedzy(); //dostęp do metody prywatnrj przez nową metodę publiczną, nie używamy 'this'
    }
  }
}
var klient = new Bankomat(50);
console.log(klient.sumaNaKoncie); //zwraca undefined
//console.log(klient.sumaPoWyplaciePieniedzy()); zwraca błąd
console.log(klient.kodPin()); //uzyskuje dostęp