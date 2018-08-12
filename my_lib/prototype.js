function Vehicle(model, year, isRunning){
	this.model = model;
	this.year = year;
	this.isRunning = false;
};

Vehicle.prototype.turnOn = function(){
	return this.isRunning = true;
};
Vehicle.prototype.turnOff = function(){
	return this.isRunning = false;
};
Vehicle.prototype.honk = function(){
	if(this.isRunning){
    console.log("beep");
		return "beep";
    }
};

var car = new Vehicle('seat', 1994);
car.turnOn();
car.honk();