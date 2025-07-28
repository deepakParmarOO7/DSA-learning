// To find the element which has no greater lement then itself on the rightside!


const findTheLeader = (arr) => {
    const n = arr.length
    let max = arr[n-1]
    let temp=[]
    temp.push(max)
    for(let i= n-2;i>=0;i--){
        if(arr[i]>=max){
            max=arr[i]
            temp.push(max)
        }
    }

    console.log(temp);
    

    for(let i=temp.length-1; i>=0;i--){
        console.log(temp[i]);
    }
}

arr = [10, 7, 4, 3, 6, 5, 2]
const result = findTheLeader(arr)
