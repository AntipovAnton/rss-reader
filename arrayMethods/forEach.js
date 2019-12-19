const arr = [1, 2, 5 , 7, 8];

const myForEach = function(array, callback, context) {
    for (let i = 0; i < array.length; i++) {
        callback.call(context, array[i], i, array);
    }
};

function cb(value, index, array) {
    console.log(index, '-index ', value, '-value');
    // console.log(array, '---array---');
}

myForEach(arr, cb);