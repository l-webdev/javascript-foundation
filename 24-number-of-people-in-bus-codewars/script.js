var number = function (busStops) {
  let totalPassengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    const onBoard = busStops[i][0];
    const offBoard = busStops[i][1];
    totalPassengers += onBoard - offBoard;
  }

  return totalPassengers;
};

const busStopsArray1 = [
  [10, 0],
  [3, 5],
  [5, 8],
];
const passengersOnBus1 = number(busStopsArray1);
console.log(passengersOnBus1);

const busStopsArray2 = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
];
const passengersOnBus2 = number(busStopsArray2);
console.log(passengersOnBus2);

const busStopsArray3 = [
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8],
];
const passengersOnBus3 = number(busStopsArray3);
console.log(passengersOnBus3);

const busStopsArray4 = [[0, 0]];
const passengersOnBus4 = number(busStopsArray4);
console.log(passengersOnBus4);
