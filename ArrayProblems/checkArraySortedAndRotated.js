const checkIfArrayIsSortedAndRotated = (arr) => {

    const originalArr = [...arr]
    const sortedArrASC = arr.sort((a,b)=>a-b)
    const sortedArrDSC = arr.sort((a,b)=>b-a)
    let sorted = false

    console.log(areArraysEqual(arr,sortedArrASC));
    console.log(areArraysEqual(arr,sortedArrDSC));
    
    if(areArraysEqual(arr,sortedArrASC) || areArraysEqual(arr,sortedArrDSC)){
        sorted = true
        return true
    }else {
        for(let i=0;i<arr.length;i++){
            if(sortedArrASC[0]==originalArr[i]){
                return false
            }
        }
    }
   
}

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
  }    

arr =  [5,4,3]
console.log(checkIfArrayIsSortedAndRotated(arr));


// working solution from chatgpt
function isSortedRotated(arr) {
    const n = arr.length;
    let incCount = 0, decCount = 0;

    // Count how many times the order is violated for increasing and decreasing
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) incCount++;
        if (arr[i] < arr[(i + 1) % n]) decCount++;
    }

    // For increasing: only one "drop" allowed, not sorted (rotation must happen)
    if (incCount === 1 && !(arr[0] < arr[n - 1])) return true;

    // For decreasing: only one "rise" allowed, not sorted (rotation must happen)
    if (decCount === 1 && !(arr[0] > arr[n - 1])) return true;

    return false;
}