//reference:
//https://chat.openai.com/share/290f9409-23fb-4f79-9954-2345e9c11c98

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
  
  const getUser=(id)=>{
    return user.find((element)=>element.id===id) //find() - runs for every element
  }
  
  const editUser=(id,key,value)=>{
    const toBeUpdated = getUser(id)
    console.log(`Id to be obtained is ${toBeUpdated}`) //Id to be obtained is [object Object]
    if(toBeUpdated!==-1)
    {
      toBeUpdated[key]=value
    }
  }
  
   const deleteUser =(id)=>{
     const tobedeleted = user.findIndex((element) => element.id === id);
     console.log(`Index to be deleted is ${tobedeleted}`) //Index to be deleted is 2
     //thats why getuser() is not used findIndex() is used
     if(tobedeleted!=-1){
       user.splice(tobedeleted,1)  //(startingindex,howmany to delete)
     }
   }
   
  const newUser ={
    name:'bar',
    age:23
  }
  newUser.id=3
  console.log(newUser) //{ name: 'bar', age: 23, id: 3 }
  console.log(user) //[ { id: 1, name: 'ram', age: 20 }, { id: 2, name: 'sam', age: 22 } ]
  addUser(newUser)
  console.log(user)
  /*
    [
     { id: 1, name: 'ram', age: 20 },
     { id: 2, name: 'sam', age: 22 },
     { name: 'bar', age: 23 }
   ]
  */
  const retreiveduser = getUser(2)
  console.log(retreiveduser) //{ id: 2, name: 'sam', age: 22 }
  
  editUser(3,'name','barani')
  console.log(user)
  /*
    [
     { id: 1, name: 'ram', age: 20 },
     { id: 2, name: 'sam', age: 22 },
     { name: 'barani', age: 23, id: 3 }
   ]
  */
  
  deleteUser(3)
  console.log(user) //[ { id: 1, name: 'ram', age: 20 }, { id: 2, name: 'sam', age: 22 } ]

//-x-x-x--x-x-x-x--x-x-x-x--x-x-x-x--x-x-x--x-x-x-x-x-x-x-x--x-x-x-x-x-x-x--x-x-x-x-x-x-x--x-x-x-x-x-x-x-x-x-x-x--x-x-x-x-x-x-x

  // let person = {
  //   name: 'Alice',
  //   age: 25,
  //   city: 'London'
  // };
  
  // // Accessing object properties
  // console.log(person.name); // Output: Alice
  // console.log(person.age); // Output: 25
  // console.log(person.city); // Output: London
  // console.log(person) //{ name: 'Alice', age: 25, city: 'London' }
  // const addid ={
  //   id:1,
  //   ...person
  // }
  // /*
  // we create a new object called addId by using the spread syntax (...person),
  // which copies all the properties of the person object into the addId object.
  // */
  // console.log(addid) //{ id: 1, name: 'Alice', age: 25, city: 'London' }
  // console.log(person) //{ name: 'Alice', age: 25, city: 'London' }