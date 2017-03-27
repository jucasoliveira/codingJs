///////////////////////////////////////
// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



///////////////////////////////////////
// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/



///////////////////////////////////////
// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/



///////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}
*/



///////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

*/

// 1 & 2
var johnHeights = 170;
var johnAge = 15;
var friendHeights = 172;
var friendAge = 15;

var calcJohn = johnHeights + (johnAge * 5);
var calcFriend = friendHeights + (friendAge * 5);


// 3
if (calcJohn > calcFriend){
  console.log("John wins whit " + calcJohn + " points.");
} else if(calcFriend > calcJohn){
  console.log("friend wins with " + calcFriend + " points.");
} else {
  console.log("there is a draw");
}

// 4
var anotherFriendHeight = 173;
var anotherFriendAge = 15;

var calcAnotherFriend = anotherFriendHeight + (anotherFriendAge * 5);

if (calcJohn > calcFriend && calcJohn > calcAnotherFriend){
  console.log("John wins whit " + calcJohn + " points.");
} else if (calcFriend > calcAnotherFriend && calcFriend > calcJohn){
  console.log("friend wins with " + calcFriend + " points.");
} else if (calcAnotherFriend > calcJohn ) {
  console.log("Anoter friend wins with " + calcAnotherFriend + " points.");
} else {
  console.log("there is a draw");
}
