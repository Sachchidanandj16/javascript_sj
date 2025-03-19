


const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
/*
// const newNums = mynumbers.map( (i)=> {return i+11} )
const newNums = mynumbers.forEach( (i) => { 
    const ok = console.log(i+4)
})
console.log(newNums)
*/


// chainning
const consNums = mynumbers
                .map( (i) => i*10 )
                .map((j)=> j+1)
                .filter((k)=> k>70)
console.log(consNums)