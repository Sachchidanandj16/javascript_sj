// Immediately Invoked Function Expression

(function NamePrint(){
    console.log(`You are Logged In!`)
})(); //semicolon is used when we use multiple functions

( () => {
    console.log("database Connected")
})(); //we can use functions without naming it !

((nameU)=>{
    console.log(`${nameU} you are connected to Database`)
})("Sachchidanand") //we can also pass arguments in these un named functions !

(()=>{})() //syntax
({})() //syntax