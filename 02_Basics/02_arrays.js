const dc_heroes = ["logan", "deadpool", "aquamen", "green latern"]
const marvel_heroes = ["thor", "capt. America", "ironmen"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes) //['thor','capt. America','ironmen',[ 'logan', 'deadpool', 'aquamen', 'green latern' ]]
//here we got output array in array and inner arrays treat as element

// console.log(marvel_hero)

//concat operator
// const allHero = marvel_heroes.concat(dc_heroes)
// console.log(allHero)

//spread operator
// const allNewHero = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHero);

// const A1 = [1,2,3, [4,5,6], 8,[9,10,11,[12,13]]]
// const b1 = A1.flat(Infinity)
// console.log(b1);//[1, 2, 3, 4, 5, 6, 8, 9, 10, 11,12, 13]

// console.log(Array.isArray([1,2,3,4,5])) //true
// console.log(Array.isArray("Ramesh")) //false

// console.log(Array.from("Ramesh")) //convert to array 

// console.log(Array.from({name:"Sachchidanand"})); //converting an object to array will discucc it later

// let score1 = 21
// let score2 = 45
// let score3 =87
// console.log(Array.of(score1, score2, score3)); // [ 21, 45, 87 ]
