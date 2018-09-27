const Car = function(brand, model){
  this.brand = brand;
  this.model = model;
}

Car.prototype = {
  changeColor: function(color){
    return 'I like ' + color + ' ' + this.brand + ' ' + this.model + '!'
  }
}

export default Car;