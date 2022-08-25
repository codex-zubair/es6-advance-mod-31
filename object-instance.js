// THIS ARE OBJECT INSTANCE>>>>
/* ""we can create multiple object instance from object...""
lets see car1 car2 they all are instances of a class that class holded blueprint 
and by using this blueprint initialized value to a variable as like a object it calls 
object instance...  */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
//   Create a single object, with the keyword new . 
// !This one is object instances... NEw key word
  var car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.year);