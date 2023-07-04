//This file exports to global.js

let students = ["swa","suki","tej"];
// module.exports = students

let car = {
    name:"ford",
    price:1000
};
// module.exports = car //will result in printing car 2times,so cmd line 4 and use line 11
module.exports = {students,car};