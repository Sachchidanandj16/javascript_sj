// singleton
// Object.create

// object literals

// const sach = Symbol("Key0")


const obj = {
    name: "Sachchidanand",
    "full name":"shastri",
    age: 18,
    sach: "Hello Baby",
    email:"shastri@Gmail.com",
    isLoggedIn: true,
    LastloggedIn:["monday"]
}
// console.log(obj.email)
// console.log(obj["full name"]);

// console.log(obj.sach); //wrong way
// console.log(obj[sach]); //correct way

obj.email = "sachchidanandjha@adobe.com"
// Object.freeze(obj) //to freeze objects 
// console.log(obj)

obj.notification = function(){
    console.log(`Are you sure ${this.name} ?`);
}
console.log(obj.notification())