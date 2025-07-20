//To rearrange an array arr[] so that each element becomes arr[i] = arr[arr[i]] with O(1) extra space,

const reArrangeArray = (arr) =>{
    let newArr = []
    const n = arr.length
    for(let i=0; i<n; i++ ){
        newArr.push(arr[arr[i]])
    }
    console.log(newArr);
    
}

arr = [4,0,2,1,3]
reArrangeArray(arr)


//efficient solution

const rearrange = (arr) => {
    const n = arr.length;

    // Encode both old and new values into arr[i]
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i] + (arr[arr[i]] % n) * n;
    }

    // Decode the new value from each arr[i]
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / n);
    }

    return arr;
}