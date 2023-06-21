//higherorder func example
function higherx2(two,val){
    return two(val)
  }
  function two(val){
    return 2*val
  }
  var num = higherx2(two,5)
  console.log("hi "+num+" bdsj")
  
  //backtick
  console.log(`hi ${num} bdsj`)//backtick
  //var para = "This is a multiline paragraph,cannot be printed using double quotes
              // but can be used with backtick(`)" //error
  var para = `This is a multiline paragraph,cannot be printed using double quotes
               but can be used with backtick`   //prints output
  console.log(para)
  
  //to find index
  const str = "Tony Stark"
  const letter = "n"
  const index = str.indexOf(letter)
  console.log(index) //2
  
  //reverse a string
  const reverse = (s) =>{
    //return s.split("").reverse().join("");
    let rev=''
    for(let i=s.length-1;i>=0;i--){
      rev+=s[i]
    }
    return rev
  }
  const resultttt = reverse("browser") 
  console.log(resultttt)  //resworb
  
  //Array
  var name =['abi','anu','alex','amu']
  console.log(name.pop()) //to remove at end
  console.log(name)
  console.log(name.push('ammu')) //to insert at end
  console.log(name)
  console.log(name.shift()) //to remove at front
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // fruits[fruits.length] = "Kiwi"; //instead of push()
  console.log(name)
  console.log(name.unshift('abi')) //to insert at front
  console.log(name)
  
  /*SPLICING:
  syntax:
    array.splice(index, howmany, item1, ....., itemX)
    index - starting index
    howmany - no.of items to be removed
    item1..itemx - no.of items to be added
    */
  var num=[0,1,2,3,4,5,6,7,8,9,]
  var removed = num.splice(2,3)
  console.log(removed) //[ 2, 3, 4 ]
  console.log(num) //[ 0, 1, 5, 6,7, 8, 9]
  var inserted = num.splice(2,0,2,3,4)
  console.log(inserted) //[]
  console.log(num) //[0,1,2,3,4,5,6,7,8,9,]
  
  //create a array [1,2,3,4,5] ,add till 10 and remove firstfour
  var numbers = [1,2,3,4,5]
  numbers.splice(6,0,6,7,8,9,10)
  console.log(numbers) //[1,2,3,4,5,6,7,8,9,10]
  var firstfour = numbers.splice(0,4)
  console.log(firstfour) //[1,2,3,4]
  var delnreplace = firstfour.splice(1,2,5,6)
  console.log(delnreplace) //[ 2, 3 ]
  console.log(firstfour)//[ 1, 5, 6, 4 ]
  
  //palindrome
  
  const ispalindrome = (str)=>{
    /* method 1
    var temp=str.split('').reverse().join('')
    /*if(str===temp)
    return true
    else
    return false*/
    /* method 2
    var temp=str.split('').reverse().join('')
    return str==temp
    */
    //method 3
    return str.split('').reverse().join('') == str
  }
  
  const resultt = ispalindrome('browser')
  const result22 = ispalindrome('madam')
  console.log(resultt) //false
  console.log(result22) //true
  
  //===
  console.log(10=='10') //true (does not check 'type')
  console.log(10==='10') //fasle
  
  //Captializing first letter of each word from the sentence
  const titleCase = (str) =>{
    //return str.charAt(0).toUpperCase() +str.slice(1) //Hello world (W (not w) so)
    let word = str.split(' ')
    for(let i=0;i<word.length;i++){
      word[i] = word[i][0].toUpperCase()+word[i].slice(1);
    }
    return word.join(' ');
  }
  const resu = titleCase('hello world') 
  console.log(resu) //Hello World
  
  //anagram
  function anagram(w1,w2){
    w1=w1.toLowerCase()
    w2=w2.toLowerCase()
    if(w1.length ==w2.length){
      return w1.split('').sort().join('') === w2.split('').sort().join('')
    }
    return false
  }
  
  let word1 ='Race'
  let word2 = 'Care'
  let pet1 = 'cat'
  let pet2 ='dog'
  const resultxx = anagram(word1,word2)
  const result2 = anagram(pet1,pet2)
  console.log(resultxx) //true
  console.log(result2) //false
  
  //REPLACE o -> a
  //Hello world -> Hella warld
  function replace(str){
    var replaced = str.replace(/o/g,'a')  //g refers to global variable
    return replaced
  }
  function transform(word,letter1,letter2){
    var split = word.split(letter1)
    console.log(split)
    return word.split(letter1).join(letter2)
    
  }
  
  let result = replace('Hello world')
  console.log(result)
  let res = transform('Hello world','o','a')
  console.log(res)
  

  
  
  