const countOccurences = (arr, element) =>{
    let countArr = new Array(arr[arr.length-1]).fill(0)
    console.log(countArr);
    let count = 0;
    currentElement = arr[0]
    for(let i=0;i<arr.length;i++){
        countArr[arr[i]] = countArr[arr[i]]+1
    }
    console.log(countArr);
    
    return countArr[element]
}
arr=[10,20,20,30,30,30,40,50]
console.log(countOccurences(arr,30));


// Better method using binary search

const findOccurrences = (arr,element) => {
    const first = findFirstOccurrence(arr,element)
    const last = findLastOccurrence(arr,element)

    console.log(last-first+1)
}

const findFirstOccurrence = (arr,element) =>{
    low = 0
    high = arr.length-1

    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(element>arr[mid]){
            low=mid+1
        }
    else if(element<arr[mid]){
        high = mid-1
    }else {
        if(mid == 0 || arr[mid-1] != arr[mid]){
            return mid
        }else {
            high = mid-1
        }
    }
}
return -1
}
const findLastOccurrence = (arr,element) =>{
    low = 0
    high = arr.length-1

    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(element>arr[mid]){
            low=mid+1
        }
    else if(element<arr[mid]){
        high = mid-1
    }else {
        if(mid == arr.length-1 || arr[mid+1] != arr[mid]){
            return mid
        }else {
            low = mid-1
        }
    }
}
return -1
}
arr2=[10,20,20,30,30,30,40,50]
findOccurrences(arr2,30)