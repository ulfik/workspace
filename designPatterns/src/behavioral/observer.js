class Instagram {
  constructor(){
    this.followers = [];
  }

  addFollower(follower){
    this.followers.push(follower);
  }
  publishNewMessage(msg){
    return this.followers.map(follower => follower.update(msg));
  }
}

class Follower {
  constructor(name){
    this.name = name;
  }
  update(msg){
    return this.name + msg;
  } 
}

export default {Instagram, Follower};