class YouTubeChannel {
  constructor(){
    this.subscribers = [];
  }

  addSubscriber(subscriber){
    this.subscribers.push(subscriber);
  }

  publishNewVideo(msg){
    this.subscribers.forEach(subscriber=>subscriber.update(msg));
  }
}

class Subscriber {
  constructor(name){
    this.name = name;
  }

  update(msg){
    console.log(this.name + " " + msg);
  }
}

var videoGamesReviews = new YouTubeChannel();

var geek = new Subscriber("geek");
var stefan = new Subscriber("stefan");

videoGamesReviews.addSubscriber(geek);
videoGamesReviews.addSubscriber(stefan);

videoGamesReviews.publishNewVideo("The Witcher 4 is coming!");
