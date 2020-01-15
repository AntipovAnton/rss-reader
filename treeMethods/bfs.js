///////////// Universal tree traversal bfs function /////////////

const tree = {
    title: 'A',
    children: [
        {
            title: 'B',
            children: [
                {
                    title: 'C',
                    children: [
                        {
                            title: 'E',
                        },
                    ]
                },
            ]
        },
        {
            title: 'D',
        },
        {
            title: 'Y',
            children: [
                {
                    title: 'Z',
                },
            ]
        },
    ]
};

const tree2 = {
    finance: [
        {
            cost: 1000,
        },
        {
            cost: 2000,
        }
    ],
    it: {
        front: [
            {
                cost: 3000,
            },
            {
                cost: 4000,
            }
        ],
        qa: {
            manual: [
                {
                    cost: 5000,
                },
                {
                    cost: 6000,
                }
            ],
            automation: [
                {
                    cost: 7000,
                },
                {
                    cost: 5500,
                }
            ]
        }
    }
};

const tree3 = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        someVal: 40,
                        something: 'data'
                    }
                }
            }
        }
    }
};

function breadthFirstIterative(obj, val, callback) {
    let queue = [obj];
    if (obj[val]) callback(obj[val]);
    while (queue.length > 0) {
        let currentObj = queue.shift();
        const keys = currentObj instanceof Object ? Object.keys(currentObj) : [];
        for (const key of keys) {
            const objVal = currentObj[key];
            if (objVal[val]) callback(objVal[val]);
            queue.push(objVal);
        }
    }
}

const resultTree = [];
const resultTree2 = [];
const resultTree3 = [];

breadthFirstIterative(tree, 'title', function (value) {
    resultTree.push(value);
});

breadthFirstIterative(tree2, 'cost', function (value) {
    resultTree2.push(value);
});

breadthFirstIterative(tree3, 'something', function (value) {
    resultTree3.push(value);
});

console.log(resultTree, ` - expected result: [ 'A', 'B', 'D', 'Y', 'C', 'Z', 'E' ]`);
console.log(resultTree2, ` - expected result: [ 1000, 2000, 3000, 4000, 5000, 6000, 7000, 5500 ]`);
console.log(resultTree3, ` - expected result: [ 'data' ]`);