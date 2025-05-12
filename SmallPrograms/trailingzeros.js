const getTrailingZero = (n)=>{
    let factorial = getFactorial(n);
    console.log(factorial);
    
    zeroCount = 0;
    while(factorial%10 === 0){
        zeroCount++;
        factorial = Math.floor(factorial/10)
    }
    return zeroCount
}

const getFactorial = (num) => {
    if(num===0){
        return 1;
    }
    while(num>0){
        return num*getFactorial(num-1);
    }
}

console.log(getTrailingZero(50));

// Efficient solution , 
// count 2 and 5
// Key Insight:

// Trailing zeroes are created by pairs of 2 and 5 in the prime factorization of n!. Since there are always more 2s than 5s, we only need to count the number of 5s.

// Steps:

// Count how many multiples of 5 are ≤ n.
// Count higher powers of 5 (25, 125, etc.) as they contribute extra 5s.
// Formula:

let num = 125;
const countTrailingZero = (num)=>{
    let res= 0;
    for(let i = 5;  i<=num;i =i*5 ){
        res= res+ Math.floor(num/i)
    }
    return res;
}
console.log(countTrailingZero(50))

