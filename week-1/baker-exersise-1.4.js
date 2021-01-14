
/*
============================================
; Title:  exercise 1.4
; Author: Tiffany Baker
; Date:   1/5/2021
; Modified By: Tiffany Baker
; Description: JS exercise adding cars with phototype and duck typing.
;===========================================
*/

const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise 1.4"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model)
{

  this.model = model;
}
Car.prototype.start = function()
{
  console.log("Car added to the racetrack!");
}

function Truck(model, year)
{
  this.model = model;
  this.year = year;
}
Truck.prototype.start = function()
{
  console.log("Truck added to the racetrack!");
}

function Jeep(model, year, color)
{
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = function()
{
  console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle)
{
  vehicle.start();
  racetrack.push(vehicle);
}

var ford500 = new Car("Ford");
var chevy = new Truck("Silverado","2021");
var compass = new Jeep("compass","2020","white");

console.log("");

driveIt(ford500);
driveIt(chevy);
driveIt(compass);

console.log("\n-- The following vehicles have been added to the racetrack--");

for (var x = 0; x<racetrack.length; x++)
{
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

  // end program
