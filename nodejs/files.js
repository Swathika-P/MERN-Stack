// // This will not work in copying the contents of sample into write
// let fs = require("fs");

// let sampleFileData = "only this text will be printed" //whatever given here,will be copyed to write.txt file
// fs.readFile("./sample.txt",function(err,data){
//     sampleFileData = data;
// })
// fs.writeFile("./write.txt",sampleFileData,
//       function(err){ //anonymous function
//        console.log(err);
// }) //only this text will be printed - will be copyed in write.txt file


//this will write the contents of sample.txt file in the write.txt file
let fs = require("fs");

let sampleFileData = ""
fs.readFile("./sample.txt",function(err,data){
    sampleFileData = data;
fs.writeFile("./write.txt",sampleFileData, //this will create a write.txt file if it doesnt exist,and add content.
      function(err){ //anonymous function
       console.log(err);
})
}) //this is a sample read file - will be copyed in write.txt file