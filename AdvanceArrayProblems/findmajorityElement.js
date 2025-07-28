// find the majority element where any element that appears more then n/2

const findCandidate = (arr) => {
    max_index = 0
    count = 1

    for(let i=1;i<arr.length;i++){

        if(arr[max_index]!==arr[i]){
            count--
        }else {
            count++
        }

        if(count===0){
            max_index = i
            count = 1
        }
    }

    return arr[max_index]
}

const findMajority = (arr,candidate) => {
    let count = 0

    for(let i=0;i<arr.length;i++){
        if(arr[i] === candidate){
            count++
        }
    }

    if(count > (arr.length/2)){
        return 1
    }
    return 0
}

arr=[8,7,6,8,6,6,6,8,8,8]
const res = findCandidate(arr)
console.log(res);
console.log(findMajority(arr,res));

