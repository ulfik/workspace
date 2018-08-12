class SnowMan {
  constructor(snow, hut, carrot){
    this.snow = snow;
    this.hut = hut;
    this.carrot = carrot;
  }
  show(){
    console.log("This year snowman hasn't got eyes. We used some " + this.snow + " and we added fancy " + this.hut + " and " + this.carrot);
  }
}

class SnowManBuilder {
  constructor(snow){
    this.snow = snow;
  }
  withCarrot(carrot){
    this.carrot = carrot;
  }
  withHut(hut){
    this.hut = hut;
  }
  build(){
    return new SnowMan(this.snow, this.hut, this.carrot);
  }
}

var snowmanBuilder = new SnowManBuilder("pink radioactive snow");
snowmanBuilder.withCarrot("stinky carrot");
snowmanBuilder.withHut("hut");

var freakySnowman = snowmanBuilder.build();
freakySnowman.show();
