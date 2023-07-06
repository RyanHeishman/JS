// variables & data types

// ### Primative Data Types ###

// string
var firstName = 'John';

// number
var age = 25;
var pi = 3.14;

// boolean
var isHuman = true

// ### Data Structures ###

// array
var names = ['LeBron', 'Kemba', 'Scalabrini', 1]
console.log(names[2])
console.log(names[3])

// objects
var john = {
    // key value pairs
    firstName: "John",
    lastName: 'Smith',
    age: 24,
    isHuman: true
}
console.log(john.age)
console.log(isHuman)

// ### Functions ###
function sayHi(name){
    console.log('Hello ' + name);
}
sayHi("Ryan")
sayHi('Jeff')

// for loops
for(var i = 0; i < names.length; i++){
    console.log(names[i])
}

// conditionals

// if
if(age > 18){
    console.log('You\'re an adult');
}
elseif(age > 12){
    console.log('You\'re a teenager');
}
else{
    console.log('You\'re a child');
}


