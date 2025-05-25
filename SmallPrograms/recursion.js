// fibonacci 
// 0,1,1,2,3,5,8,13
const fibonacci = (n) => {
    if(n<=2){
        return n-1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
const giveFibonacci = (n) =>{

    for(let i=1;i<n;i++){
        console.log(fibonacci(i))
    }
}
console.log(giveFibonacci(10))

// ip: 5 op: 5,4,3,2,1

const printInFactorial = (n) =>{
    if(n==1){
        return 1;
    }
    
    console.log(`${n}`)
    return printInFactorial(--n)
}

console.log(printInFactorial(6));

// ip: 5 op: 1,2,3,4,5

const printRecursive = (min, max) => {
    if (min > max) return;
    console.log(min);
    return printRecursive(min + 1, max);
}

printRecursive(1, 6);

console.log(printInFactorialRev(6));

//Tail recursion
const printNonRecursive = (n) => {
    start:
    if(n==0){
        return
    }

    console.log(n)
    n=n-1
   //  goto start
}

console.log(printNonRecursive(6));
