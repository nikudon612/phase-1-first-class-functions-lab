const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = (drivers) => {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function fareQuintupler(fare) {
    return fare * 5;
  };
}

const fareDoubler = (fare) => fare * 2;

const fareTripler = (fare) => fare * 3;

// const createFareMultiplier = (fare, multiplier) => {
//     return multiplier(fare)
//   }

//   const fareDoubler = (fare) => {
//     return fare * 2
//   }

//   const fareTripler = (fare) => {
//     return fare * 3
// }

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(drivers);
};
