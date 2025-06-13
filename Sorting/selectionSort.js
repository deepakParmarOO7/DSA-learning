// less memory writes compared to quicksort, mergesort, Insertion sort. But 
// cycle sort is optimal in terms of memory writes.

const selectionSort = (arr) =>{
    var minElement = arr[0]
    var minIndex = 0

    for(let i=0; i<arr.length; i++) {
        minIndex=i
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
                console.log(minElement);
            }
            
        }
        if(minIndex!= i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

const arr=[2,1,5,8,7,6]
sortedArray = selectionSort(arr)
console.log(sortedArray);
