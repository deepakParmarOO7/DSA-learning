const findLCM = (a,b) => { 
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    
    if (max % min === 0) { 
        return max;
    }

    let i = 2;
    while (1) {
        if (max * i % min === 0) {
            return max * i;
        }
        i++;
    }
}

console.log(findLCM(4, 6))

//Efficient way if lcm(a,b) = (a*b)/gcd(a,b)

const getGCD = (a,b) => {
    if (b===0) {
        return a;
    }
    return getGCD(b, a%b)
}
const getEfficientLcm = (a,b) => {
    return ((a*b)/getGCD(a,b))
}
console.log(getEfficientLcm(4,6));
