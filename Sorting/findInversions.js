// Naive solution
const findInversions = (arr) =>{
    count = 0;
    if(arr.length==1){
        return 0;
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]-arr[j]>0){
                count ++
            }
        }
    }
    return count
}

arr = [40]
const inversions = findInversions(arr)
console.log(inversions);


// Efficient soluton using merge sort