//build an array that stores last names. The default value of the array will be empty

var names = [];


//Ask user for a first name, and store it in the first names array.
var firstName = prompt("What is your first name?");
names.push(firstName);
//Ask user for a last name, and sotore it in the last names array,
var lastName = prompt("What is your last name?");
names.push(lastName);


//Display to the window both first and last name from the array with the length of the both arrays
window.alert(names + " " + names.length);
L