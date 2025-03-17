//if
/*
if(condition){
    //********
}

if(true){
    //****************
}
if(false){
    //***************
}
*/

//comparison operator
// <, >, <=, >=, !=, ==, ===

// diffrence b/w "==" & "==="
// "=" this operator is used for assign 
// "==" this checkes isEquals or not
// "===" this checks isEquals or not and it also checks their data type

/*
const tempreture = 43

if(tempreture >= 50){
    console.log("grater than 50");
}else{
    console.log("less than 50");
}
console.log("EXECUTED");
*/

/*
const score = 200
if(score>100){
    // const power = "fly"
    // var power = "Always"
    console.log(`User Power: ${power}`);
}

console.log(`user Power: ${power}`);

//in above program we saw that using const or let have only access in block scope in loop while in other hand "var " key word have global scope we can use var keyword variables outside the loop.
*/

//short hand notation:
// const balance = 1000;
// if(balance> 500) console.log("test");
// if(balance> 500) console.log("test"), console.log("test2");
// these are callled implicit scope, we assume that there is scope, they always performe in one line or using comma, and in last using of semicolon is neccessary.

// Nesting
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<50){
//     console.log("Less than 750")
// }else{
//     console.log("less than 1200")
// }

//real life example

const usertLoggedIn = true
const debitcard = true
const IsloggedInFromGoogle = false
const IsloggedinFromGmail = true

if(usertLoggedIn && debitcard){
    console.log("Allow to explore and buy");
}
if(IsloggedInFromGoogle || IsloggedinFromGmail)[
    console.log("user LoggedIn!")
]