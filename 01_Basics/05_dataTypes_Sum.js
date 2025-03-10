/*
1. Primitive Data Types
Type of Primitive dataTypes: String, Number, Boolean, BigInt, Symbol, Null, Undefined

2.Refrence(Non-Primitive DataTypes)
Array, Objects, Functions


=>JavaScript is a dynamic programming language. This means that it allows dynamic typing
(variables can hold different types of data at different points in time)
Example:
let a = 5; // number
a = "Hello"; // now it's a string

//Object
let myObj = {name: "Sachch", age:34} //creating Object
console.log(typeof myObj);
console.log(myObj);

const human = ["Rajendra", "Diwakar", "Devendra", "Kaushal", "Satendra"] //Creating array
console.log(human, typeof human);

const myfunct = function(){ //creating function
    console.log("Hello World");
    
}
myfunct();//calling function


//++++++++++++++++++++ MEMORY +++++++++++++++++++++++++

//Stack(Premitive Data Types) copy data will be change
//Heap(Non-Premitive Data Types) orignal data will be change
let A = "Prem"
let B = A
console.log(A, B);
B = "Ramesh"
console.log(A, B);



let userOne = {
    email: "UserOne@github.com",
    UpiId: "Shastrijii@pingpay",
    nameOne:"Shastri"
}
let userTwo = userOne
userTwo.UpiId = "8533099925@ptsbi"

console.log(userTwo.UpiId);

console.log(userOne.UpiId);
*/