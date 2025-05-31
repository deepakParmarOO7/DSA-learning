//to find the largest element in the array!

let findLargestNum = (arr) => {
    largest = arr[0]
    index = 0
    for (let i = 1; i < arr.length;i++) {
        if (arr[i]>largest) { 
            index = i;
            largest = arr[i]
        }
    }
    return index;
}

let arr = [22, 4, 100, 77, 80,81, 32,11]
pivot = findLargestNum(arr)
//console.log(arr[pivot])

//to find 2nd largest element in the array!

let findSecondLargestNum = (arr) => {
    largest = -Infinity
    secondLargest = -Infinity
    largestIndex = -1
    secondLargestIndex = -1
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i]
        if (num > largest) {
            secondLargest = largest
            secondLargestIndex = largestIndex

            largestIndex = i;
            largest = num

        } else if (num>secondLargest && num<largest) { 
            secondLargest = num;
            secondLargestIndex = i
        }
    }
    console.log(secondLargest);
    console.log(largest);
    return secondLargestIndex;
}

let arr1 = [1, 3, 3, 2]
pivot1 = findSecondLargestNum(arr1)
//console.log(arr1[pivot1])