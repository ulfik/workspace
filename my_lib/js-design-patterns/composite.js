class Sith {
  constructor(captains){
    this.captains = captains;
    this.attackPower = 100;
  }
  getAttackPower(){
    return this.captains.reduce(
      (acc,captain)=>acc+captain.getAttackPower(),
      this.attackPower);
  }
}

class Captain {
  constructor(stormtroopers){
    this.stormtroopers = stormtroopers;
    this.attackPower = 20;
  }
  getAttackPower(){
    return this.stormtroopers.reduce(
      (acc,stormtrooper)=>acc+stormtrooper.getAttackPower(), 
      this.attackPower);
  }
}


class Stormtrooper { 
  constructor(){
    this.attackPower = 1;
  }

  getAttackPower(){
    return this.attackPower;
  }
};


const phasma = new Captain([new Stormtrooper(), new Stormtrooper(), new Stormtrooper()]);
const toudi = new Captain([new Stormtrooper()]);
const lordVader = new Sith([phasma, toudi]);
console.log(lordVader.getAttackPower());

