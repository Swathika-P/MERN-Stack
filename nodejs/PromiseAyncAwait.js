//use "latentflip" website to understand the flow 

//Promise
let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Dataaaaa")
},2000)
})
console.log(promise);
//node PromiseAyncAwait
//OUTPUT: Promise { <pending> }  -> not completed ,so use "then"
 
let promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Data")
},2000)
}).then(function(val){
    console.log(val);  //Data (after 2 secs)
})

//async/await - can be called only inside a function
async function test(){
let fun = await new Promise(function(resolve,reject){ //WAITS till the promise is completed
    setTimeout(function(){
        console.log("Timeout called") 
        resolve("Data");
        //OUTPUT:
        // Timeout called
        // Data
},2000)
})
console.log(fun)
}
test()

// async function printing(){
//     let values = await fetch("https://my-json-server.typicode.com/typicode/demo/posts");
//     console.log(values);
// }
// printing()  //fetch is not present in node so it wont work,put in browser(inspect->console)