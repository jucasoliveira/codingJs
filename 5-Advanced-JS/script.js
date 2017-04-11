// Function Constructor

/*
var john = {
  name : "John",
  yearOfBirth : 1990,
  job: "Teacher"
}
*/
/*
var Person = function (name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

}

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastname = 'Smith';

var john = new Person("John", 1990 , "teacher");
var jane = new Person ('Jane', 1969, 'Designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
*/


// Object.create
/*
var personProto = {
    calculateAge : function() {
      console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
  {
    name:{ value : 'Jane'},
    yearOfBirth: {value:1969},
    job: {value: 'designer'}
  })
*/


//Primitives vs objects

/*
var a =23;
var b = a;

a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name:'John',
  age:26
};
var obj2 = obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
}

function change (a,b){
  a = 30;
  b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj.city);
*/



///////////////////
// Functions as arguments
/*
var years = [1990, 1965, 1937, 2005 , 1998];

function arrayCalc(arr , fn){
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el){
  return el >= 18;
}

function maxHeartRate(el) {
  if(el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}
var ages = arrayCalc(years,calculateAge);
console.log(ages);


var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);

var heartRate = arrayCalc(ages , maxHeartRate);
console.log(heartRate);
*/
///////////
/*
function interviewQuestion(job){
  if(job === 'designer'){
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if(job === 'teacher'){
    return function(name){
      console.log('What subject do you teach ,' + name + '?');
    }
  } else {
    return function(name){
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Maria');
*/




////
//Closures

/*
function retirement(retirementAge){
  var a = " years left until retirement";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1990);
retirementIceland(1990);
retirementGermany(1990);


function interviewQuestion(job){
  return function(name) {
    if(job === 'designer'){
      console.log(name + ', can you please explain what UX design is?');
    } else if(job === 'teacher'){
        console.log('What subject do you teach ,' + name + '?');
    } else {
        console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');

*/
////


var john = {
  name : 'John',
  age : 26,
  job : 'teacher',
  presentation : function (style, timeOfDay) {
    if(style == 'formal'){
      console.log('Good ' + timeOfDay + " ladies and gentleman I\'m " + this.name + " and I\'m a " + this.job + " and my age is  " + this.age);
    }
    if(style == 'friendly'){
      console.log(" Whats's up? I\'m " + this.name + " , I\'m a " + this.job + " and my age is " + this.age + " , have a good " + timeOfDay);
    }
  }
}

var emily = {
  name : 'Emily',
  age : 23,
  job : 'Designer'
}
//john.presentation('formal','morning');

//Method borrowing
//john.presentation.call(emily,'friendly','afternoon');
/*
var johnFriendly = john.presentation.bind(john, 'friendly');
var emilyFriendly = john.presentation.bind(emily, 'formal');
johnFriendly('morning');
johnFriendly('night');

emilyFriendly('afternoon');

//john.presentation.apply(emily, ['friendly','afternoon']);

var years = [1990, 1965, 1937, 2005 , 1998];

function arrayCalc(arr , fn){
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el){
  return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
*/
