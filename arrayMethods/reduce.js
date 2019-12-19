const arr = [1, 2, 5, 7, 8];

const myReduce = function(arr, callback, accumulator) {
    let result = accumulator;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }
    return result;
};

const cb = (previousValue, currentValue, index, array) => {
    return previousValue + currentValue;
};

console.log(myReduce(arr, cb, 0));
console.log(myReduce(arr, cb, 7));