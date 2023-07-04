//setTimeout - is used to call a function after a certain period of time(here,after 3 sec)
// executes only once
setTimeout(()=>{
     console.log("Inside setTimeout")
},3000)

//setInterval - is used to call a function repeatedly at a specified interval of time(here, every 1 sec)
setInterval(()=>{
    console.log("Inside setInterval")
},1000)

let a =10
setTimeout(()=>{
    if(a>1000){
        clearInterval(interval); 
    }
},4000)
let interval = setInterval(()=>{
 a=a*10
 console.log(a)
},1000)
//OUTPUT:
// 100
// 1000
// 10000
//EXPLANATION : 
//  1 sec(setInterval)- 100
//  2 sec(setInterval) - 1000
//  3 sec(setInterval) - 10000
//  4 sec(setTimeout) - 10000>1000 -> condition true so clearInterval

let b =10
setTimeout(()=>{
    if(b>10000){
        clearInterval(interval2); 
    }
},4000)
let interval2 = setInterval(()=>{
 b=b*10
 console.log(b)
},1000)
//OUTPUT
// 100
// 1000
// 10000
// 100000
// 1000000
// 10000000
// 100000000
// 1000000000
// 10000000000 and so on
//EXPLANATION:
//  1 sec(setInterval)- 100
//  2 sec(setInterval) - 1000
//  3 sec(setInterval) - 10000
//  4 sec(setTimeout) - 10000>10000 -> condition fails so clearInterval not executed,
//  since setTimeout executes only once ,no more setTimeout func,only setInterval,so it prints all the values
