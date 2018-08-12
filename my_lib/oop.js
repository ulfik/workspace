/*"new" keyword:
  1) tworzy nowy obiekt
  2) przypisuje this do nowego obiektu
  3) na koniec funkcji dodaje "return this"
  4) sum tricky stuff... 
*/

//constructor function 
function Dog(name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    return this.name + " just barked!"
  }
};

var rusty = new Dog("Rusty", 3);
var shirko = new Dog("Shirosław", 10);

console.log(rusty.bark());
console.log(shirko.bark());

//Multiple constructors - dwa obiekty używają tych samych właściwości (property)

function Car(model, year, wheels){
  this.model = model;
  this.year = year;
  this.wheels = 4;
}

//motor ma takie same właściwości - model, rok i liczba kół

//call, apply
function Motorcycle(model, year, wheels){
  Car.call(this, model, year);
  this.wheels = 2;
}

function Motorcycle(model, year, wheels){
  Car.apply(this, [model, year]);
  this.wheels = 2;
}

function Motorcycle(model, year, wheels){
  //apply + arguments - jeszcze lepsze rozwiązanie (jeśli wywołujemy arguments w jakiejkolwiek funkcji - dostajemy tablcę)
  Car.apply(this, arguments);
  this.wheels = 2;
}

