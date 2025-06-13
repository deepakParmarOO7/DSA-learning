// to search if element is present or not!!

arr=[10,20,30,40,50,60]


const chekIfElementIsPresent = (arr,element) => {
    low=0
    high=arr.length-1

    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(arr[mid]==element){
            return true
        }else if(element>arr[mid]){
            low = mid+1
        }else if(element<arr[mid]){
            high = mid-1
        }
    }
    return false
}

console.log(chekIfElementIsPresent(arr,70))