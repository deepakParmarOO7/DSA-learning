 const rotateArray = (arr, count) => {
   // rotate by no of count 
   while(count--){
    let temp = arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=temp
   }
    return arr
 }

 const arr=[1,2,3,4]
 console.log(rotateArray(arr,2));
 