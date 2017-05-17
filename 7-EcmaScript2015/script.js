/////////////////////////////////////////////
// Lecture : let and const

//ES5
/*
var name5 = "Jane Smith";
var age5 = 23;
name5 = 'Jane Miler';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jame Miler';
console.log(name6);

//ES5

function driversLicense(passedTest) {
  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1999;


  }
  console.log(firstName + ", " + yearOfBirth + " allowed to drive a car");
}

driversLicense(true);

//ES6

function driversLicense6(passedTest) {
  console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';


  }
  console.log(firstName + ", " + yearOfBirth + " allowed to drive a car");
}

driversLicense6(true);



var i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}


console.log(i);

*/

/////////////////////////////////////////////
//Lecture : BLOCKS and IFFS
/*
//ES6
{
  const a = 1;
  let b = 2;
  var c = 3;

}
//console.log(a + b);
console.log(c);

//ES5
(function () {
  var c = 3;
})();

//console.log(c);
*/


/////////////////////////////////////////////
//Lecture : Strings
/*
let firstName = "John";
let lastName = "Macauly";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

//ES5
console.log("This is "+firstName+" "+lastName+" he was born in "+ yearOfBirth + " today he is "+calcAge(yearOfBirth));

//ES6
console.log(`This is ${firstName} ${lastName}, he was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old. `);




const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.startsWith('j'));
console.log(n.endsWith('y'));
console.log(n.endsWith('U'));
console.log(n.includes(' '));
console.log(n.includes('cau'));
console.log(`${firstName} `.repeat(5));
*/

/////////////////////////////////////////////
// Lecture : Arrow functions

/*
const years = [1990, 1965, 1982, 1937];

//ES5
var age5 = years.map(function (el) {
  return 2016 - el;
});
console.log(age5);

//ES6
let age6 = years.map(el => 2016 - el);
console.log(age6);

age6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(age6);

age6 = years.map((el,index) => {
  const cur = new Date().getFullYear();
  const age = cur - el;
  return `Age element ${index + 1}: ${age}.`
})

console.log(age6);
*/

/////////////////////////////////////////////
// Lecture : Arrow Functions 2
/*
//ES5
var  box5 = {
  color : 'green',
  position: 1,
  clickMe : function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + " and it is " + self.color;
      alert(str);
    })
  }
}

//box5.clickMe();

//ES6

const box6 = {
  color : 'green',
  position: 1,
  clickMe : function() {
    document.querySelector('.green').addEventListener('click', () => {
      let str = 'This is box number ' + this.position + " and it is " + this.color;
      alert(str);
    })
  }
}
*/
//box6.clickMe();

//this not gonna work like this.
/*
const box66 = {
  color : 'green',
  position: 1,
  clickMe : () => {
    document.querySelector('.green').addEventListener('click', () => {
      let str = 'This is box number ' + this.position + " and it is " + this.color;
      alert(str);
    })
  }
}

box66.clickMe();
*/


//ES5
/*
function Person(name) {
  this.name = name;
};

Person.prototype.myFriends = function (friends) {
  var arr = friends.map(function (el) {
      return this.name + ' is friends with ' +el;
  }.bind(this));
  console.log(arr);
};

var friends = ['Bob', 'Jane' , 'Mark'];

new Person('John').myFriends(friends);

//ES6

Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map(el => `${this.name}  is friends with ${el}`);
  console.log(arr);
};

let friends = ['Bob', 'Jane' , 'Mark'];

new Person('Mike').myFriends6(friends);
*/
