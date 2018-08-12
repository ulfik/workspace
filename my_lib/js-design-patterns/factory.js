//factory design pattern

const ChocolateFactory = function (type, flavor){
  const chocolate = {};

  chocolate.type = type;
  chocolate.flavor = flavor;
  chocolate.eat = function (){
    console.log(this.type + " chocolate with " + this.flavor + " - omnomnomnooom!!!")
  }

  return chocolate;
}

var milk = ChocolateFactory("milk", "strawberry cream");


milk.eat();


// class

class ChocolateFactory2 {
  createChocolate(type, flavor){
    const chocolate = {};
    chocolate.type = type;
    chocolate.flavor = flavor;
    chocolate.eat = function(){
      console.log(this.type + " chocolate with " + this.flavor + " from this factory is the best - omnomnomnooommmm!!!")
    }
    return chocolate;
  }
}

var dark = new ChocolateFactory2().createChocolate("dark", "small pineapple pieces");


dark.eat();