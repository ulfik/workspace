var szafa = {} //deklaracja nowego obiektu
szafa.zawartość = "sukienka";
szafa.wyjmijRzeczy = function(){
  console.log(this.zawartość + " została wyjęta!");//odwołanie do właściwości wewnątrz obiektu
}

var komoda = new Object(); //inny sposób na deklarację nowego obiektu
komoda.zawartość = "koszula";
komoda.wyjmijRzeczy = szafa.wyjmijRzeczy;//przypisanie funkcji do innego obiektu

szafa.wyjmijRzeczy();
komoda.wyjmijRzeczy();

//constructor function

function Piekarnik(ciasto){
  this.mojNowyWypiek = ciasto; //mojNowyWypiek to zmienna która odnosi się do konstruktora - do niej przypisujemy argument
} 

var sernik =  new Piekarnik("sernik");//konstruktor tworzy nowy obiekt
var murzynek = new Piekarnik("murzynek");

var keksik = new Object();//nowy obiekt bez konstruktora
keksik.mojNowyWypiek = "keksik";

console.log("upiekłam pyszny " + sernik.mojNowyWypiek);
console.log("upiekłam pyszny " + murzynek.mojNowyWypiek);
console.log("upiekłam pyszny " + keksik.mojNowyWypiek);

//tworzenie metod

function randomowaMetoda(argument){ // nasza metoda - funkcja 'inline'
  console.log(argument);
}

var obiekt = new Object(); //tu tworzymy obiekt i przypisujemy do niego metodę
obiekt.metodaPierwsza = function(){
  console.log("Toż to pierwsza metoda!");
}

obiekt.metodaDruga = randomowaMetoda; //takie czary

obiekt.metodaPierwsza();
obiekt.metodaDruga("A teraz mamy drugą metodę");