
const findFactorial = (num)=>{
    let i = 0
    let result = 1

    if(num === 0){
        return 0;
    }

    while(i<num){
    
        result = result*(num-i)
        i++;
    }
    return result
}

// recursive
const recursiveFactorial = (num) =>{
    if(num == 1){
        return 1;
    }

    while(num>0){
        return num*recursiveFactorial(num-1);
    }
}

console.log(findFactorial(6));
console.log(recursiveFactorial(6));
