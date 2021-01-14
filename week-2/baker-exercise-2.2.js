
/*
============================================
; Title:  exercise 2.2
; Author: Tiffany Baker
; Date:   1/5/2021
; Modified By: Tiffany Baker
; Description: JS exercise displaying a persons full name and age.
;===========================================
*/

const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise 2.2"));




/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person =
{

  getAge: function()
  {

    return this.age;

  }
};

var tammy = Object.create(person,
  {
    "age":
    {
      "value": "54"
    },
      "fullName":
      {
        "value": "Tammy Baker"
      }
  });

  tammy.getAge();

  console.log("The persons full name is: '%s'", tammy.fullName);
  console.log("The persons age is: '%s'", tammy.age);



// end program
