// to search if element is present or not!!

arr=[10,20,30,40,50,60]


const binarySearch = (arr,element,low,high) => {
        if(low>high){
            return false
        }
       let mid = Math.floor((low+high)/2)

        if(arr[mid]==element){
            return true
        }else if(element>arr[mid]){
            return binarySearch(arr,element,mid+1, high)
        }else if(element<arr[mid]){
             return binarySearch(arr,element,low, mid-1)
        }
    
    return false
}

console.log(binarySearch(arr,50,0,5))