
//For Each loop
// const proGramLang = ["java1", "C", "Python", "HTML", "CSS", "Node.js", "JS"]
// proGramLang.forEach( function (a){
//     console.log(a);
// } )

// for Each using Arrow function
// proGramLang.forEach( (item)=>{
//     console.log(item);
// })

// for each loop using function 
// function printme(item){
//     console.log(item)
// }
// proGramLang.forEach(printme)


// MORE USE OF ARROW Function
/*
proGramLang.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})
*/
// Output:-
/*
java1    0  ['java1','C','Python','HTML','CSS','Node.js','JS']
C        1  ['java1','C','Python','HTML','CSS','Node.js','JS']
Python   2  ['java1','C','Python','HTML','CSS','Node.js','JS']
HTML     3  ['java1','C','Python','HTML','CSS','Node.js','JS']
CSS      4  ['java1','C','Python','HTML','CSS','Node.js','JS']
Node.js  5  ['java1','C','Python','HTML','CSS','Node.js','JS']
JS       6  ['java1','C','Python','HTML','CSS','Node.js','JS']
*/

const myCoding = [
    {
        languagename: "javaScript",
        LanguageShortname: "js"
    },
    {
        languagename: "java",
        LanguageShortname: "java"
    },
    {
        languagename: "python",
        LanguageShortname: "Py"
    },
    {
        languagename: "C",
        LanguageShortname: "c"
    },
]
myCoding.forEach((a)=>{
    console.log(a.languagename)
    // console.log(a.LanguageShortname)
})
