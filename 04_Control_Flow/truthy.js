// const userEmail=  "Sachchidanand@AI"
const userEmail=  []
// if(userEmail){
//     console.log("Found user Email");
// }
// else{
//     console.log("Don't have User Email")
// }

/*
Falsy Values:-
false, 0,-0, BigInt, "", null, undefined, NaN

truthy Value:-
"0", "false", " ", [], {}, function(){}, 
*/

// if(userEmail.length === 0){
//     console.log("Array is Empty")
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Array is Empty")
// }

/*
nullish Coalescing Operator(??) :- 
returns the right-hand operand when the left-hand operand is null or undefined.
If the left-hand operand has any other value (even false, 0, NaN, or an empty string), it returns that value.
*/

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 90

// console.log(val1);



/*
Turniary operator:-
condition ? true : false
*/

const Age = 17
Age >=18 ? console.log("Elligible for vote") : console.log("Not Elligible for voting") 