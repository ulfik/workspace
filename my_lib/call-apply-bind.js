var obj = {
  sumator: function(a, b, c) {
    return a + b + c + this.d;
  },
  d: "D"
}

console.log(obj.sumator("A", "B", "C"));


var other = {
  d: "XXX"
}

// CALL - wywołujemy funkcję z nowym thisem i argumenty funkcji po thisie
console.log("call " + obj.sumator.call(other, "A", "B", "C"));

// APPLY - wywołujemy funkcję z nowym thisem i argumenty funkcji w tablicy
console.log("apply " + obj.sumator.apply(other, ["A", "B", "C"]));

//console.log("apply " + obj.sumator.apply(other, "A", "B", "C"));

// BIND - dostajemy nową funkcje którą wywołujemy tak jak starą
var nowySumator = obj.sumator.bind(other);
console.log("bind " + nowySumator("A", "B", "C"));


