class Cat {
  constructor(){
    this.state = new RestedState();
  }
  hunt(){
    if(this.state.hasPower()){ 
      return 'Catched mouse';
    } else {
      return 'Catched nothing';
    }
  }
  run(){
    this.state = new TiredState();
  }
  sleep(){
    this.state = new RestedState();
  }
}

class TiredState{
  hasPower(){
    return false;
  }
}

class RestedState{
  hasPower(){
    return true;
  }
}

export default {Cat, TiredState, RestedState};