// 5 most common operations in files
// 1.readFile()
// 2.writeFile()
// 3.mkdir()
// 4.rmdir()
// 5.unlink()

// This will not work in copying the contents of sample into write
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

//creating directories (command all the above code except line 15)
fs.mkdir("./folder",function(err){ //create a folder "folder" in the current folder
    console.log(err);
})
//delete folder
fs.rmdir("folder",function(err){ //removes folder if it is empty
    console.log(err);
})
//removes folder if it is not empty
let options = {
    recursive:true
}
fs.rmdir("./folder",options,function(err){ 
    console.log(err);
})
//deletes the file inside the folder "folder"
fs.unlink("./folder/index.js",function(err){ 
    console.log(err)
})