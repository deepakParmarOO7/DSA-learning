const mergeArrays = (arr1,arr2) =>{
    sizeofarr1 = arr1.length
    for(let i=0;i<arr2.length;i++){
        arr1[sizeofarr1+i] = arr2[i]
    }
    console.log(arr1);
    // then sort
}

const mergeArraysWithPush = (arr1,arr2) =>{
    m = arr1.length
    n = arr2.length
    res = []
    i=0
    j=0;

    while(i<m && j<n){
        if(arr1[i]<=arr2[j]){
            res.push(arr1[i])
            i++
        }else {
            res.push(arr2[j])
            j++
        }
    }
    while(i<m){
        res.push(arr1[i])
        i++
    }
    while(j<n){
        res.push(arr2[j])
        j++
    }
    console.log(res);
    

}

arr1= [10,15,30]
arr2=[2,20]

mergeArrays(arr1,arr2)
mergeArraysWithPush(arr1,arr2)