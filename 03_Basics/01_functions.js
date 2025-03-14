// function shyam(){
    // console.log("S")
    // console.log("A")
    // console.log("S")
    // console.log("H")
    // console.log("A")
    // console.log("S")
    // console.log("T")
    // console.log("R")
    // console.log("I")
// }
// shyam()

//*** function have a prperty that after return keyword nothing will be apllied 

/*
function addTwo(num1,num2){
    console.log(num1+num2)
}
addTwo(1,"w") //Op: 1w
//in this we have a problem that it did not check input if they are number or not
*/

/*
//other method 1
 function addTwo1(num1,num2){
    let result = num1 + num2
    return result
 }
 const ans = addTwo1(1,2)
 console.log(ans) //op: 3
*/

/*
//other method 2
function addTwo2(num1, num2){
    return num1+num2
}
console.log(addTwo2(9,1))
*/

/*
function LogInUserMessage(username = "Sachchu"){ //the main purpose of giving value of username here is this is minimum value if not any value pass later then this value will be printed.
    if(!username){
        console.log(`please Enter a username before Login`)
        return
    }
    return `${username} Just Logged In!`
}
*/

// console.log(LogInUserMessage("Sachchidanand Jha")) // Sachchidanand Jha Just Logged In!
// console.log(LogInUserMessage()) //undefined Just Logged In!

/*
function calculateCartPrice(val1,val2,...num1){ //spread operator
    return num1
}

console.log(calculateCartPrice(20,50, 80, 97, 87, 66, 54, 45))
*/


/*
const user= {
    userName: "Sachchu",
    price: 200
}
*/

/*
function HandleObject(anyobject){
    console.log(`${anyobject.userName} is donated ${anyobject.price} online mode!`)
}
*/

// HandleObject(user) //can access like this 

/*
HandleObject({    // 2nd method to access we can introduce object here itself
    userName: "Shastri",
    price: 199
})
*/

/*
const myArr = [100, 200, 400, 230] 
function return2ndValue(getArray){ //function that returns 2nd element from array
    return getArray[2]
}
*/

// console.log(return2ndValue(myArr)
// console.log(return2ndValue([100, 200, 400, 230]))