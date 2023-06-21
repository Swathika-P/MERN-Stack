//https://chat.openai.com/share/c1ba5786-6039-47da-9b4b-323ef1c9aca0

//promises
function fetchData(){
    return new Promise((resolve,reject)=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response)=>{
        console.log(response)
        resolve(response.json())
      }).then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  fetchData()
    .then(data => console.log(data))
    .catch(error=> console.error(error))

//async/await
async function fetchData(){
    try{
      const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const json = await response.json()
      return json
    }catch(error){
        console.log(error)
    }
    }
  fetchData().then(res =>console.log(res)).catch //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }

