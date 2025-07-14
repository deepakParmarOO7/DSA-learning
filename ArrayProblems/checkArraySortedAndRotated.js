const checkIfArrayIsSortedAndRotated = (arr) => {

    let n = arr.length
    let i = 0
    let rotation = 0
    let originalArray = [...arr]
    let sortedArr = []

    if(arr[1]<arr[n-1]){
        sortedArr = arr.sort((a,b)=> a-b)
    }else {
        sortedArr = arr.sort((a,b)=> b-a)
    }

    console.log(sortedArr);
    console.log(originalArray);

    if(originalArray==sortedArr) 
        return true
    else {
        for(let i=0;i<n;i++){
            if(sortedArr[1] == originalArray[i]) 
                rotation = i
        }
    }
console.log(rotation);

    if(rotation>0)
         return false
   
}

arr =  [3,4,2,1]
console.log(checkIfArrayIsSortedAndRotated(arr));
