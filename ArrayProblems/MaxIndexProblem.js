arr = [34, 8, 10, 3, 2, 80, 30, 33, 1]

let n = arr.length
let leftarr = []
leftarr[0] = arr[0]
for(let i=1;i<n;i++){
    leftarr[i] = Math.min(arr[i], leftarr[i-1])
}
console.log(leftarr)
let rightarr=[]
rightarr[n-1] = arr[n-1]

for(let i = n-2; i>=0;i--){
    rightarr[i] = Math.max(arr[i],rightarr[i+1])
}
console.log(rightarr)

let i =0 
let j=0
let maxDiff = -1
while(i<n&& j<n){
    if(leftarr[i]<= rightarr[j]){
        maxDiff = Math.max(maxDiff, j-i)
        j++
    }else {
        i++
    }
}
console.log(maxDiff);
