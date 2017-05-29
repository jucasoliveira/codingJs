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


/////////////////////////////////////////////
// Lecture : Destructuring

/*
//ES5

var john = ["John" , 26];

var names = john[0];
var ages = john[1];


//ES6

const [name , year] = ['john' , 26];
console.log(`${name} ${year}`);

const obj = {
  firstName : "John",
  lastName : 'Calm'
};

const {firstName , lastName} = obj;

console.log(`${firstName} ${lastName}`);

const {firstName: a, lastName: b} = obj;
console.log(`${a} ${b}`);

function calcRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
};

const [age , retirement] = calcRetirement(1990);

console.log(`${age} ${retirement}`);
*/

/////////////////////////////////////////////
// Lecture : Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArray5 = Array.prototype.slice.call(boxes);
boxesArray5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
})


//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5

for (var i = 0; i < boxesArray5.length; i++) {
  if (boxesArray5[i].className === "box blue") {
    continue;
  }
  boxesArray5[i].textContent = 'I changed to blue';
}


//ES6

for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue';
}


//ES5
var ages = [12 , 17, 8, 21, 14, 11];
var full = ages.map(function (curr) {
  return curr >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


/////////////////////////////////////////////
// Lecture : Spread Operator
/*
function add4ages(a,b,c,d) {
  return a + b + c +d;
}
var sum1 = add4ages(18,30,12,31);

console.log(sum1);

//ES5

var ages5 = [18,30,12,21];
var sum2 = add4ages.apply(null, ages5);
console.log(sum2);

//ES6

const sum3 = add4ages(...ages5);

console.log(sum3);


const familyOne = ['joh','jane','mark'];
const familyTwo = ['mary','bob','anne'];
const bigFamily = [...familyOne,'Lucas',...familyTwo];

console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


/////////////////////////////////////////////
// Lecture : Rest Parameters


//ES5
/*
function isFullAge5(limit) {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (cur) {
    console.log((2016 - cur) >= limit);
  })
}

isFullAge5(16,2017,1991,2010,1987);


//ES6

function ifFullAge6(limit , ...years){
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

ifFullAge6(18,2017,1991,2010,1987);
*/

// Lecture : Default Parameters


//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName == undefined ? lastName = 'Smith' : lastName;
  nationality == undefined ? nationality = 'American' : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}



//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/

/////////////////////////////////////////////
// Lecture : Maps
/*
const question = new Map();
question.set('question', 'what is the official name of the latest major js version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
//console.log(question.size);


if (question.has(4)) {
  console.log('Answer 4 is here');
}

//console.log(question);

//question.clear();

//console.log(question);
//question.forEach((value,key) => console.log(`this is ${key} and this is ${value}`));



for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}

const ans = parseInt(prompt('write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////////////////////////
// Lecture : Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var John5 = new Person5('John', 1990, 'teacher');

//ES6

class Person6{
  constructor (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/
