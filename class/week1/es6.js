// var vs let vs const
// var is function

// let firstName = 'John';

// // number
// let age = 25;
// let pi = 3.14;

// // boolean
// let isHuman = true

//isHuman = false // this works because you can reassign let

// const variables -- can not change
// const num1 = 5;

// num1 = 6; // this will throw an error

// const john = {
//     // key value pairs
//     firstName: "John",
//     lastName: 'Smith',
//     age: 24,
//     isHuman: true
// }
// john.age = 26; // this is ok
// john.favLang = 'JavaScript'; // this is ok
// console.log(john);

// scoping
// var is function scoped
// let and const are block scoped

// if(true){
//     let x =5;
//     console.log(x); // this works
// }
// console.log(x); // this will throw an error

// // arrow functions
// const sayHi = (name) => {
//     console.log('Hello ' + name)
// }
//  // simplified version
// const sayHi2 = (name) => 'Hello ' + name;

// destructuring
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 23,
    isHuman: true
}
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// destructure the person object
const {firstName, lastName, age, isHuman} = person;
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

let nums = [1,2,3,4,5];
// deconstruct the nums array
const [num1, num2, num3, num4, num5] = nums;

// spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2]
console.log(arr3);

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//predict the output
console.log(randomCar) // Tesla
console.log(otherRandomCar) // Mercedes