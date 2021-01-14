/*
============================================
; Title:  exercise 1.3
; Author: Tiffany Baker
; Date:   1/5/2021
; Modified By: Tiffany Baker
; Description: JS exercise displaying phone details.
;===========================================
*/
const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise 1.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function Cell(manufacturer, model, color, price){

  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price - price;

  //creates a function to retrieve the prices
  this.getPrice = function(){
    return this.price;
  }

  //creates a function to retrieve the model
  this.getModel = function(){
    return this.model;
  }

  //creates a function to retrieve at the input details
  this.getDetails = function(){
    return "Manufacture: " + this.manufacturer + "\nModel: " + this.getModel() +
    "\nColor: " + this.color + "\nPrice: " + this.getPrice();
  }

}

var phone = new Cell("Lg", "Note 5", "blue", "159.99");

console.log(phone.getDetails());

// end program
