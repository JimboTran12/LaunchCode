let spaceShuttleName = "Determination";
let shuttleSpeed_mph = 17500;
let marsDistance_km = 225000000;
let moonDistance_km = 384400;
const milesPerKilometer = 0.621;


console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed_mph);
console.log(typeof marsDistance_km);
console.log(typeof moonDistance_km);
console.log(typeof milesPerKilometer);

let marsDistance_miles = marsDistance_km * milesPerKilometer;
let hoursToMars = marsDistance_miles / shuttleSpeed_mph;
let daysToMars = hoursToMars / 24;

console.log(spaceShuttleName + " will take " + String(daysToMars) + " days to reach the Mars");

let kilometersToMoon = 384400;
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed_mph;
let daysToMoon = hoursToMoon / 24;
console.log(spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon.");