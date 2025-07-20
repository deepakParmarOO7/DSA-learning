/**
 * Given an array arr[]. Rotate the array to the left 
 * (counter-clockwise direction) by d steps, where d is a
 *  positive integer. Do the mentioned change in the array in place.
 * **/

const rotateArr = (arr, d) => {
    // code here
    const n = arr.length
    d = (d%arr.length)

        reverseArr(0,d-1, arr)
        console.log(arr);
        reverseArr(d,n-1, arr)
        console.log(arr);
        reverseArr(0,n-1, arr)

    return arr
}

function reverseArr(start,end, arr) {
    let i = start
    let j = end
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
}

arr=[7,3,9,1]
const result = rotateArr(arr,9)
console.log(arr);
