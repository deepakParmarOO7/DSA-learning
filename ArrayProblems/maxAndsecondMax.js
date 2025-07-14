arr = [2, 1, 2, 3, 4]
let result = []
let fLarge = -1
let sLarge = -1

const n = arr.length
for (let i = 0; i < n; i++) {
    if (fLarge < arr[i]) {
        fLarge = arr[i]
    }
}
// arr = arr.filter((e)=>e!==fLarge)
for (let i = 0; i < n; i++) {
    if (sLarge < arr[i] && arr[i] < fLarge) {
        sLarge = arr[i]
    }
}
result.push(fLarge)
result.push(sLarge)

function findMaxAndSecondMax(arr) {
    let max1 = -1;
    let max2 = -1;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    }

    return [max1, max2 === -1 ? -1 : max2];
}

//efficient way!
function findMaxAndSecondMax(arr) {
    let max1 = -1;
    let max2 = -1;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    }

    return [max1, max2 === -1 ? -1 : max2];
}