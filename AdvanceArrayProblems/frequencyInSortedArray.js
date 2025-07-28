//Given a sorted array arr[] consisting of N integers, the task is to print the frequency of each unique element in the array.


const findFrequency = (arr) => {
    let sortMap = new Map()
    let count = 0
    for(let i=0;i<arr.length; i++) {
        sortMap.set(arr[i], sortMap.get(arr[i]) || 0)
    }
    for(let i=0;i<arr.length; i++) {
        sortMap.set(arr[i], sortMap.get(arr[i])+1)
    }
    return sortMap
}

arr = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]
const res = findFrequency(arr)
//console.log(res);


// without using Map, using 2 loops where 2nd loop only visits element once hence persisting o(n) time complexity

const findFrequency2 = (arr2) => {
    const n = arr2.length
    let j = 0;
    let count = 0
    for(let i=0;i<n;i++){
        count = 1
        j=i+1
        while(j<n) {

            if(arr2[i]==arr2[j]){
                count++
                 j++
            }else 
                break // to avoid vising other lements as the elements are already sorted
           
        }
        console.log(`${arr2[i]} appears ${count} times`);
        i=j-1
    }
}

arr2 = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]
const res2 = findFrequency2(arr)
console.log(res2);