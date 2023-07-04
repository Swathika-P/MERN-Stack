//this file imports from modules.js

let {students} = require("./modules.js")
console.log(students) //[ 'swa', 'suki', 'tej' ]

let {car} = require("./modules.js")
console.log(car)//{ name: 'ford', price: 1000 }

let all = require("./modules.js")
console.log(all) 
// OUTPUT:
// {
//     students: [ 'swa', 'suki', 'tej' ],
//     car: { name: 'ford', price: 1000 }
//   }
