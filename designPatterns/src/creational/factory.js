class ChocolateFactory{
  createChocolate(type, flavour, extras){
    const chocolate = {};

    chocolate.type = type;
    chocolate.flavour = flavour;
    chocolate.extras = extras;
    chocolate.eat = function() {
        return 'omnomnomnom... this is my favourite ' + this.type + ' chocolate!';
      }
    
    return chocolate;
  }
}

export default ChocolateFactory;