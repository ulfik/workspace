class Sith{
  constructor(captains, name){
    this.captains = captains;
    this.name = name;
  }
  say(){
    console.log(this.name + " said: Don't make me destroy you... shhhh shhh");
    return this.captains.forEach(captain=>captain.say());
  }
}

class Captain{
  constructor(stormtroopers, name){
    this.stormtroopers = stormtroopers;
    this.name = name;
  }
  say(){
    console.log("I'am captain " + this.name + " And I'am sorry my Lord!");
    return this.stormtroopers.forEach(stormtrooper=>stormtrooper.say());
  }
}

class Stormtrooper{
  say(){
    console.log("I'am sorry my Lord!");  
  }
}
const phasma = new Captain([new Stormtrooper(),new Stormtrooper(),new Stormtrooper()], "Phasma");
const grevious = new Captain([new Stormtrooper(),new Stormtrooper(),new Stormtrooper()], "Grevious");
const vader = new Sith([phasma,grevious], "Lord Vader");
vader.say();