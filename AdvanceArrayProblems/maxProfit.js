
const findMaxProfit = (arr)=> {
    let profit = 0
    for(let i=1;i<arr.length;i++) {
        if(arr[i]>arr[i-1]){
            profit+= (arr[i]-arr[i-1])
        }
    }

    return profit
}

arr=[100, 180, 260, 310, 40, 535, 695]
const res = findMaxProfit(arr)
console.log(res);
