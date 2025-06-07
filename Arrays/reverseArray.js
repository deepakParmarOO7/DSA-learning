// I/P: arr=[10,5,7,30]
// O/P: arr=[30,7,5,10]

const reverseTheArray = (arr) => {
    let tempArr=[]
    for(let i=arr.length-1;i>=0;i--){
        tempArr.push(arr[i])
    }
    return tempArr
}

arr=[10,5,7,30]
console.log(reverseTheArray(arr));


//using swapping while revering

const reverseTheArrayWithSwap = (arr) =>{
    let high= arr.length-1
    let low = 0
    let temp
    while(low<high){
        // temp = arr[low]
        // arr[low] = arr[high]
        // arr[high] = temp
        [arr[low++],arr[high--]]=[arr[high],arr[low]]
        
    }
    console.log(arr);
    
}
reverseTheArrayWithSwap([10,5,7,30])