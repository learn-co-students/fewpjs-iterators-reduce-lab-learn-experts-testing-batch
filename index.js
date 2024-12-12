const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((total, element) => total + element, 0)

// const reducer = (batteryBatches) => {
//     const totalBatteries = batteryBatches.reduce((memo, num) => memo + num)
//     return totalBatteries
// }