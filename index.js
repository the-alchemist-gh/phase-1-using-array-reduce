const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = 0;

let totalBatteries = batteryBatches.reduce(function(accumulator,item){
  return item + accumulator
},0);