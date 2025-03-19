
// const Programinglanguage = ["JS", "Python", "C++", "HTML", "CSS"] 

// Programinglanguage.forEach( (i)=>{
//     console.log(i);
// })



// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const NewNum = Numbers.filter( (i) => i > 6)
// console.log(NewNum);


// const newNums = []
// Numbers.forEach((num)=>{
//     if(num>6){
//         newNums.push(num)
//     }
// })
// console.log(newNums)



//For practice

const books = 
[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (i)=> i.genre ==='History' ) //for finding History genre books

const userbooks1  = books.filter((j) => j.publish >= 1995 && j.genre ==="History" ) //Books publish after 1995 and genere History

console.log(userbooks1)