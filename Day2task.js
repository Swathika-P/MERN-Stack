reference:
https://chat.openai.com/share/290f9409-23fb-4f79-9954-2345e9c11c98

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
    return user.find((element)=>element.id===id)
  }
  
  const editUser=(id,key,value)=>{
    const toBeUpdated = getUser(id)
    console.log(`Id to be obtained is ${toBeUpdated}`) //Id to be obtained is [object Object]
    if(toBeUpdated)
    {
      toBeUpdated[key]=value
    }
  }
  
   const deleteUser =(id)=>{
     const tobedeleted = user.findIndex((element) => element.id === id);
     console.log(`Index to be deleted is ${tobedeleted}`) //Index to be deleted is 2
     //thats why getuser() is not used findIndex() is used
     if(tobedeleted!=-1){
       user.splice(tobedeleted,1)
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