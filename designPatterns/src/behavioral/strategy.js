const GO_OUT_FROM_HOME_TIME = 5;
const GET_IN_TO_WORK_PLACE = 10;

class WayToWork{

  setTransportStrategy(transportStrategy){
    this.transportStrategy = transportStrategy;
  }
  calculateTime(energy){
    return GO_OUT_FROM_HOME_TIME + 
      this.transportStrategy.calculateRequiredTime(energy) + 
      GET_IN_TO_WORK_PLACE;
  }
}

class BikeTransport {
  calculateRequiredTime(energy){
    const bikeRideTime = 20;
    return bikeRideTime - energy;
  }
}

class FootTransport {
  calculateRequiredTime(energy){
    const goOnFoot = 40;
    return goOnFoot - energy;
  }
}

class CarTransport {
  calculateRequiredTime(){
    const carRideTime = 10;
    return carRideTime;
  }
}

export default {WayToWork, BikeTransport, FootTransport, CarTransport};