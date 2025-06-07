// to check if array is sorted

const checkIfArrayIsSorted = (arr)=>{
    currentElement=arr[0]
    sorted = true
    for(let i=1;i<arr.length;i++){
        if(arr[i]<currentElement){
            sorted=false
        }else if(arr[i]>currentElement){
            currentElement=arr[i]
            sorted=true
        }
    }
    return sorted
}

const arr=[5,10,20]
console.log(checkIfArrayIsSorted(arr));

//we can pick last element also, if the it remains larger through whole traversal then array is sorted.
