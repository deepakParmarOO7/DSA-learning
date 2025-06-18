// Insertion sort is stable alogorithm
// Time complexity: 
// Best case: Linear time(sorted array)
// In general o(n)sq, worst case: Reverse sorted


const arr = [4,2,5,6,1,7,0,8]

const handleInsertionSort = (a) =>{
    for(let i=1;i<arr.length;i++){
        key = arr[i]
        j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }   
        arr[j+1] = key
    }
    return a
}

sortdArr = handleInsertionSort(arr)
console.log(sortdArr);
