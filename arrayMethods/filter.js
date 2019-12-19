const arr = [1, 2, 5 , 7, 8];

const myFilter = function(arr, callback, context) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

function cb(value, index, array) {
    return value > 5;
}

console.log(myFilter(arr, cb));