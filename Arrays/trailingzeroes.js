// To move zeroes to end
// I/P: arr=[8,0,5,0,0,7]
// O/P: arr=[8,5,7,0,0,0]

const moveZeroToEnd = (arr)=>{
    const tempArr=[]
    count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++
            continue
        }
        tempArr.push(arr[i])
    }
    if(count>0){
        while(count>0){
            tempArr.push(0)
            count--
        }
    }
    return tempArr
}
arr=[8,0,5,0,0,7]
console.log(moveZeroToEnd(arr))


//efficient way
const moveZeroes = (arr) => {
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[count]]=[arr[count],arr[i]]
            count++
        }
    }
console.log(arr);

}
moveZeroes([8,0,5,0,0,7])