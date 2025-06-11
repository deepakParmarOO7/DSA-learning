// implement normal bubble sort

const bubbleSort = (array) => {
    if (array.length == 1) {
        return array
    }
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            if (array[j+1]<arr[j]) {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
            // following will sort it in descending order
            // if (array[j+1]>arr[j]) {
            //     [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            // }
        }
    }
return array
}

arr = [1, 3, 9, 2, 6, 1, 92, 11]
sortedArray = bubbleSort(arr)
console.log(sortedArray);



const bubbleSortEfficient = (array) => {
    if (array.length == 1) {
        return array
    }
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            let swapped = false
            if (array[j+1]<arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
          
        }
        if (!swapped) {
            break;
      }
    }
return array
}