//https://chat.openai.com/share/df3c3404-c740-40ea-8f01-63e628003954

//PROMISES
/*
A JavaScript Promise object can be:

Pending - While a Promise object is "pending" (working), the result is undefined.
Fulfilled - When a Promise object is "fulfilled", the result is a value.
Rejected - When a Promise object is "rejected", the result is an error object. 

if successful,call resolve with result
if unsiccessful,call reject with result

myPromise.then((result)=>{
  //handle the resolved value
}).catch((Error)=>{
  //handle errors
})
*/
 
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const condition = true  //line1
      if(condition){
        resolve("Success")
      }else{
        reject("Error:Something went wrong")
      }
    },2000) //simulating a 2 sec delay
  })
  
  console.log("START")
  myPromise.then((result)=>{
      console.log(result) 
  }).catch((error)=>{
      console.log(error) 
  }).finally(()=>{
    console.log("Finally") 
})
  console.log("END")
  /*
  START
  END
  Success
  Finally
  */
  //here in line2,if const constion = true,if block is executed(returns success)
  /*In line2,if const constion = false ,the else block is executed (returns Error:Something went wrong)
  START
  END
  ERROR!
  Error:Something went wrong
  Finally
  */
  