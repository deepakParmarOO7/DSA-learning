let num = 12321;
let num2 = num;
let result = ''
temp = 0
while(num2){
    temp = Math.floor(num2%10)
    num2 = Math.floor(num2/10)
    result+=temp
    
}
console.log(`input: ${num}`);
console.log(`result: ${result}`);

console.log(num==result?`Number is palindrome`:`Number is not palindrome`);
