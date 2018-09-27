import strategy from './strategy';

const {WayToWork, BikeTransport, FootTransport, CarTransport} = strategy;

let wayToWork;
let energyLevel;

beforeEach(() => {
  wayToWork = new WayToWork();
  energyLevel = 10;
})

test('Go to work by bike', () => {
  const bikeTransport = new BikeTransport();
  wayToWork.setTransportStrategy(bikeTransport);

  const result = wayToWork.calculateTime(energyLevel);

  expect(result).toEqual(25);
})

test('Go to work on foot', () => {
  const footTransport = new FootTransport();
  wayToWork.setTransportStrategy(footTransport);

  const result = wayToWork.calculateTime(energyLevel);

  expect(result).toEqual(45);
})

test('Go to work by car', () => {
  const carTransport = new CarTransport();
  wayToWork.setTransportStrategy(carTransport);
  
  const result = wayToWork.calculateTime();

  expect(result).toEqual(25);
})