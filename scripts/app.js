let peopleArray = 
[
    "Ken",
    "Vivian",
    "Juan",
    "Angel",
    "Darryl"
];

console.log(peopleArray.length);
console.log(peopleArray);

let arrToString = peopleArray.toString();

console.log(arrToString);

let arrJoin = peopleArray.join(" + ");
console.log(arrJoin);

let arrPop = peopleArray.pop();
console.log(arrPop);

let addToEnd = peopleArray.push("Andrew");
console.log(peopleArray);

let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map(function(number){
    return number * 3;
});
console.log(doubleNumbers);
// Arrays are just a collection of similar date types in a single fashion
// objects allow us to create a collection of data that is more complex
// to distinguish and object look for the key => value pairs
let studentList = 
[
    {
        // Key     :  Value
        'firstName': 'Ken',
        'lastName': 'Nguyen',
        'email': 'knguyen@gmail.com'
    },
    {
        'firstName': 'Alex',
        'lastName': 'Soria',
        'email': 'asoria@gmail.com'
    },
    {
        'firstName': 'Chris',
        'lastName': 'Wells-hott',
        'email': 'chott@gmail.com'
    }
];
// how to access with Dot Notation
console.log(studentList[2].email);

// How to access with bracket notation
console.log(studentList[1]['firstName']);

// Object Desructiong
let { firstName, lastName, email } = studentList[0];

console.log(firstName, lastName, email);

// lets display the data from the js file on to the HTML side

let showData = document.getElementById("showData");
let dataBtn = document.getElementById("dataBtn");

dataBtn.addEventListener("click", function(event){
    showData.innerText = studentList[1].firstName;
});