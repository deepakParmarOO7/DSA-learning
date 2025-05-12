// find greatest common divisor of 2 numbers

const getGCD = (n1,n2) => {
    debugger;
    let gcd = 1;
    if(n1===0 || n2===0){
        return;
    }
    if(n1===n2){
        return n1;
    }
    let smaller = n1<n2? n1:n2
    let bigger = n1>n2? n1:n2
    let temp = smaller;
    if(bigger%smaller === 0){
        return smaller;
    }else{
        while(temp>0){
            if(bigger%temp === 0 && smaller%temp===0){
                gcd = temp;
                
                return gcd;
            }
            temp--;
        }
    }
    return gcd;
}

console.log(getGCD(1005,115));

// Efficient way Euclidean algo gcd(b, a%b)

const getEfficientGcd = (a,b)=>{
    if(b===0){
        return a;
    }
   return getEfficientGcd(b,a%b)

}

console.log(getEfficientGcd(115,1005));
