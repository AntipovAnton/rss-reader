const users = [
    {name: 'Ivan', colors: ['red', 'orange']},
    {name: 'Alex', colors: ['green']},
    {name: 'Olga', colors: ['black', 'white']},
];

function myFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++){
        const elementArr = callback(array[i], i, array);
        for (const el of elementArr){
            result.push(el);
        }
    }
    return result;
}

const usersColors = myFlatMap(users, user => user.colors);
console.log(usersColors);