console.log('1'+true) //1true
console.log(2+false) //2
console.log(2*false) //0

//Iterating arrays - for...of loop
let arr =[1,2,3]
for(var element of arr){
  console.log(element*2)
} //op: 2\n 4\n 6

let arr2=[11,2,30]
for(var element of arr2){
  if(element%2===0){                                                
    console.log(`${element} is even`)                               
  }                                                                 
  else{                                                            
    console.log(`${element} is odd`)
  }
}  
/*Output:
 11 is odd
2 is even
30 is even
*/

//delete element from array
let arr3=[1,2,3,4,5]
console.log(arr3)  //[ 1, 2, 3, 4, 5 ]
delete arr3[2]
console.log(arr3) //[ 1, 2, <1 empty item>, 4, 5 ]

let arr4=[1,2,3,4,5]
console.log(arr4) //[ 1, 2, 3, 4, 5 ]
arr4.splice(2,2)
console.log(arr4)  //[ 1, 2, 5 ]

//Array creation using constructor
let Arr = new Array()
console.log(Arr) //[]
let Arr2 = new Array(1,'hey',9.3,[1,2,'hi'])
console.log(Arr2) //[ 1, 'hey', 9.3, [ 1, 2, 'hi' ] ]
let Arr3 = new Array(4)
console.log(Arr3)  //[ <4 empty items> ]
Arr3.push(1,4)
console.log(Arr3) //[ <4 empty items>, 1, 4 ]
Arr3[0]=2 
console.log(Arr3) //[ 2, <3 empty items>, 1, 4 ]

//foreach
const array1 = ['a','b','c']
array1.forEach((element)=>{   //array1.forEach((element)=>console.log(element))
  console.log(element)
})
/*
   a
   b
   c
*/

const array11 = ['1','2','3']
array11.forEach((element)=>console.log(element*2))
/*
   2
   4   
   6
*/

//foreach()
//TASK: Return array of elements (use foreach())
const multiply =(arr,num)=>{
    //arr.forEach((element)=> return(element*num))
    //forEach() always returns 'undefined'
    //ERROR: return must be enclosed inside {} (here {} is not used)
    let array=[]
    arr.forEach((element)=> array.push(element*num))
    return array
    /*let array=arr.map((element)=>element*num)   --------> with using map() [no foreach()]
    return array */
  }
  const result = multiply([1,2,3],2)
  console.log(result) //[ 2, 4, 6 ]

//map()
//TASK:Return odd or even array of elements (use map())
const oddEven =(arr)=>{
    return arr.map((element)=>{
      return element%2===0?'even':'odd'
    })
  }
  
  const resultt = oddEven([1,2,3])
  console.log(resultt) //[ 'odd', 'even', 'odd' ]

  //filter()
  //TASK:Return odd numbers(use filter())
  const filterEven =(array)=>{
    const newarr=array.filter((element)=>element%2===1)
    return newarr
  }
  const res=filterEven([1,2,3,4,5,6])
  console.log(res)   //[1,3,5]

  /*const filterEven =(array)=>array.filter((element)=>element%2===1)
  const res=filterEven([1,2,3,4,5,6])
  console.log(res)   //[1,3,5]
  */

  /* Differennce between map() & filter()
     map() - used when we have to return array of different size
     filter() - used when we have to return array of same size
     */

 //spread operator(...)
 //1.copying array
 const originalArray = [1, 2, 3];
 const newArray = [...originalArray];
 console.log(newArray); // Output: [1, 2, 3]

 //2.combining array
 const arr1 = [1,2,3]
 const ar2 = [4,5,6]
 const ar3 = [...arr1,...ar2]
 console.log(ar3)  //[1,2,3,4,5,6]
 
 //3.Spreading function arguments
 const sum = (x, y, z) => x + y + z;
 const numbers = [1, 2, 3];
 const ress = sum(...numbers);
 console.log(ress); // Output: 6
 
 //4.Creating a new object by merging multiple objects:
 const obj1 = { name: 'John',color:'white' };
 const obj2 = { age: 30 };
 const mergedObj = { ...obj1, ...obj2 };
 console.log(mergedObj); // Output: { name: 'John', color: 'white', age: 30 }

 //equality operator
const a1 = [1,2]
const a2 = [1,2]  //const a2 = [..a1] ->alternative
const a3 = a1
console.log(a1==a2) //false (points different memory address)
console.log(a1==a3) //true (points same memeory address)

//DESTRUCTURING
const arrv1 = [1,2,3]
const arrv2 = [4,5,6]
const [a,b,c] = arrv1
//const [_,a,b] =arrv1 //a=2,b=3
//const [a,b] =arrv1 //a=1,b=2
console.log(a)
console.log(b)
console.log(c)
const ara = [1,2,3,4,5]
const [aa1,b1,...rest] = ara
console.log(aa1) //1
console.log(b1) //2
console.log(rest) //[3,4,5] 
//[a,b,...rest] - correct format
//[...rest,a,b] - wrong format

//OBJECTS
var person = {
  fname:'swa',
  lname:'abi'
}
person.age = 19
person['salary'] = 500
console.log(person)  //{ fname: 'swa', lname: 'abi', age: 19, salary: 500 }

var student = {
  fname:'swa',
  lname:'abi',
  marks:{
    maths:95,
    eng:90,
    sub:89
  }
}
const sub ='maths'
//when sub is not defined inside marks
console.log(student.marks.sub) //undefined
//after sub is defined inside marks
console.log(student.marks.sub)  //89
console.log(student.marks[sub]) //95
 
//TASK: required output: abi's sci marks is 75
var student = {
  fname:'abi',
  cls:'x',
  marks:{
    maths:95,
    eng:90,
    sub:89,
    sci:75
  }
}
const printmarks = (obj,sub)=>{
  return (`${obj.fname}'s ${sub} marks is ${obj.marks[sub]}`)
}
console.log(printmarks(student,"sci")) //abi's sci marks is 75

//DESTRUCTURING IN OBJECTS
const obj = {
  name:'ram',
  age:22,
}
//const {name,age} = obj 
//const {age,name} = obj  (alternate)
//console.log(age) //22
const {age,name:n,height=5.9} =obj
console.log(height) //5.9 (default)
console.log(n) //ram (n is alis of name)

let{a:one,bb=25}={a:'one',bb:20}
console.log(a); //ERROR ( 2 alis(:) for a )

let{a1:onee,bbb=25}={a1:'onee',bbb:20}
console.log(bbb); //20

//foreach() in objects
const objj = {
  name:'ram',
  age:22,
  height:5
}
for(var key in objj){
  console.log(key+": "+objj[key]+1)
} 
/*
  name: ram
  age: 221
  height: 51
*/

const ob = {
  name:'ram',
  age:22,
  height:5
}
console.log(ob.address?.state)//undefined
console.log(ob.address?.state ||'TN') //TN

//increment age by 2
const op =[{
  name:'ram',
  age:22,
  height:5
},{
  name:'sam',
  age:20,
  height:9
}]
//using index
/*
op[0].age+=2
op[1].age+=2
console.log(op[0]) //{ name: 'ram', age: 24, height: 5 }
console.log(op[1]) //{ name: 'sam', age: 22, height: 9 }
*/
//using map()
const ans1 = op.map((user)=>{})
console.log(ans1)  //[ undefined, undefined ]
const ans2 = op.map((user)=>({...user,age:user.age+2}))
console.log(ans2)
/*
  [
   { name: 'ram', age: 24, height: 5 },
   { name: 'sam', age: 22, hieght: 9 }
 ] 
*/
 const obb = {
   a:1,b:2,c:3,a:2
 } //duplicate not allowed new recent val get updated
 console.log(obb)  //{ a: 2, b: 2, c: 3 }

 for(var i=0;i<3;i++){
  setTimeout(()=>console.log(i),1)
 } //op:333

(function(a){
  return (function(){
    console.log(a)
    a = 6;
  })()
  })(21); //op:21

(function(){
  setTimeout(()=>console.log(1),2000);
  console.log(2);
  setTimeout(()=>console.log(3),0);
  console.log(4); //op:2431
})

const user=[{
  id:1,
  name:'ram',
  age:20
},{
  id:2,
  name:'sam',
  age:22
}]
const addUser =(obj)=>{
  user.push(obj)
}
const newUser ={
  name:'bar',
  age:23
}
console.log(newUser) //{ name: 'bar', age: 23 }


