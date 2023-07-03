//imports sample.js file


//instead of import sample, { pi, circumference } from "./sample.js"
//which can only be used to import file only in the starting
//we use line 7
let sample = require("./sample.js")
console.log(sample) //{ pi: 3.14, circumference: 62.800000000000004 }
console.log(sample.pi,sample.circumference) //3.14 62.800000000000004