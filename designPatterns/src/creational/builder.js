class BuildYourOwnPony {
  constructor() {
    this.name = 'sad pony without name';
    this.color = 'brown';
    this.tail = 'omg there is no tail here';
    this.buttStamp = 'clear butt';
  }

  withName(name){
    this.name = name;
    return this;
  }
  withColor(color){
    this.color = color;
    return this;
  }
  withTail(color){
    this.tail = color;
    return this;
  }
  withButtStamp(stamp){
    this.buttStamp = stamp;
    return this;
  }

  build(){
    return {
      name: this.name,
      color: this.color,
      tail: this.tail,
      buttStamp: this.buttStamp
    }
  }
}

export default BuildYourOwnPony;