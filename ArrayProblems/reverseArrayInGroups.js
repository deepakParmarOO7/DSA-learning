function reverseIt(arr,size) {
    const n = arr.length
    let i=0
    let j=size>=n? n-1:size-1

 while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--

        if(i>=j && i<n && j<n){
            i= i+Math.ceil(size/2)
            j= i+size > n? n-1 : i+size-1
        }
        
    }
    return arr
}

arr = [10,5,5,10,6,10,1,7,1,7]
const reversedArr = reverseIt(arr,6)
console.log(reversedArr);
