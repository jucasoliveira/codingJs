///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year){
  console.log(2016 -year);
  console.log(this);
}
*/

var john = {
  name : 'John',
  yearOfBrith : 1990,
  calculateAge : function() {
    console.log(this);
    console.log(2016 - this.yearOfBrith);
/*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}

john.calculateAge();


var mike = {
  name : 'Mike',
  yearOfBrith : 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
