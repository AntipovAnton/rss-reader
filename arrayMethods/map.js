const arr = [1, 2, 5 , 7, 8];

const myMap = function(array, callback, context) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback.call(context, arr[i], i, arr));
    }
    return result;
};

function cb(value, index, array) {
        return value + 2;
}

console.log(myMap(arr,cb));