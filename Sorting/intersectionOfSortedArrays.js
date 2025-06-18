// find common elements between 2 arrays and then print them only once.


const printTheArray = (arr, arr2) =>{
    temp = []
    m = arr.length
    n= arr2.length
    i=0
    j=0
    while(i<m && j<n){

        if(i>0 && arr[i] === arr[i-1]){
            i++
        }
        else if(arr[i]<arr2[j]){
            i++
        }
        else if(arr[i]>arr2[j]){
            j++
        } else {
            console.log(arr[i]);
            i++
            j++
        }
    }
    // while(i<m){
    //     temp.push(arr[i])
    //     i++
    // }
    // while(j<n){
    //     temp.push(arr2[j])
    //     j++
    // }
    console.log(temp);
    return temp
}
arr=[1,20,20,40,60]
arr2=[2,20,20]

printTheArray(arr, arr2)
