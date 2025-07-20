//Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

/**Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
Output: 4
Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4

Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
Output: 1
Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.
**/

const findMajority = (arr,x,y)=>{
    let xCount = 0;
    let yCount = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === x){
            xCount ++
        }else if(arr[i] === y){
            yCount ++
        }
    }

    if(xCount == yCount)
    {
        return x<y? x: y
    }

    return xCount > yCount? x: y
}

arr = [3, 17 ,2 ,39,36, 21 ,21 ,9 ,24, 20]
const result = findMajority(arr,35,2)
console.log(result);
