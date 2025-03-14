/*
let a= 10
const b = 20 
let c = 300

if(true){
    let c = 30
}
// console.log(a);
// console.log(b);
console.log(c);
*/


//Scope
/*
let a = 100  //global scope
if(true){
    let a = 320 //block scope
    console.log("inner Value of a: ",a) //inner Value of a:  320
}
console.log("Outer value of a: ",a) //Outer value of a:  100
*/

//Nested Scope

/*
function one(){
    const userName = "Sachchidanand"

    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    // console.log(website)

    two()

}
one()
*/

/*
if(true){
    const userName = "Sachchcu"
    if(userName === "Sachchcu"){
        const website = "    Youtube"
        console.log(userName+website)
    }
}
// console.log(userName) // ReferenceError: userName is not defined
*/


// console.log(addONE(4)) // o/p: 5
// function addONE(num){
    // return num+1
// }

/* when function creates like this {addONE} we can take output before initializing function while looking at second method of creating function
    like {addTWO} we can't take output or use function before initialization, in second method while declearing a function we hold that function
    in a variable. this topic is called hoisting in which storing of elements, how to make final tree, execution etc. 
*/

// console.log(addTWO(5)) //ReferenceError: Cannot access 'addTWO' before initialization
// const addTWO = function(num){
    // return num + 2
// }

