//Arrays
//javaScript arrays are resizable

const myArr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log("orignal Array  "+myArr)
// myArr.push(9)//add elements in the last of array
// myArr.push(10)
// console.log("Oprational Array:  "+myArr);

// myArr.pop()//removes last element of Array

// myArr.unshift(0)//adds element at first of array
//console.log(myArr)

// myArr.shift()//removes first element of array
// console.log(myArr)

// console.log(myArr.includes(2)) //check out element returns boolean

// console.log(myArr.indexOf(7)); //returns the index of asked element

// const mene = myArr.join() //converts array into string
// console.log(mene);

//slice, splice
console.log("Orignal array  ",myArr);

const myAr1 = myArr.slice(0,3)
console.log("slice  ",myAr1) //it does not affect orignal array

const MyB1 = myArr.splice(0,3)
console.log("Splice  ",MyB1) //it manipulates the orignal array

console.log(myArr)