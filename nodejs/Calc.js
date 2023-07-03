console.log("Hello world");
function operation(){
    if(process.argv[4]=='add'){
    //let a = process.argv[2];
    //let b = +process.argv[3];
    //will result in concating 2 numbers
    //so use parseInt
    let a = parseInt(process.argv[2]);
    //shortcut: let a = +process.argv[2];
    let b = parseInt(process.argv[3]);
    return (`${a+b} is the sum`);
    }
    else if(process.argv[4]=='sub'){
        let a = parseInt(process.argv[2]);
        let b = parseInt(process.argv[3]);
        return (`${a-b} is the difference`);
    }
    else if(process.argv[4]=='mul'){
        let a = parseInt(process.argv[2]);
        let b = parseInt(process.argv[3]);
        return (`${a*b} is the product`);
    }
    else if(process.argv[4]=='div'){
        let a = parseInt(process.argv[2]);
        let b = parseInt(process.argv[3]);
        return (`${a/b} is the divisor`);
    }
    else{
        return("Operation does not exist")
    }
}
let result = operation();
console.log(result);