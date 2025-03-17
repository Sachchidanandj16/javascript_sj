// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2
switch (month) {
    case 1:
        console.log('january')
        break;
    case 2:
        console.log('febuary')
        break;
    case 3:
        console.log('March')
        break;
    case 2:
        console.log('April')
        break;
    default:
        console.log("default case matched")
        break;
}

/*
Switch is case sensitive

Break breaks control flow:
In switch, break stopes to execute after key or case matched 
if we remove break statement in above code the we recieved
that all case after matched key will be executed Except DEFAULT
*/