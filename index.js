// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]];
}

const returnLastTwoDrivers = function(array) {
    return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) { return fare * int }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(driversArray, returnFirstOrLastDrivers) {
    return returnFirstOrLastDrivers(driversArray);
}