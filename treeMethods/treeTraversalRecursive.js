///////////// Tree traversal using recursion for small trees (Stack overflow possibility) /////////////

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


const breadthFirst = (startingNode, callback) => {
    let queue = [startingNode];
    while (queue.length) {
        const node = queue.shift();
        callback(node);
        if (node.children) {
            queue.push(...node.children);
        }
    }
};

const depthFirstPreOrder = (startingNode, callback) => {
    callback(startingNode);
    if(startingNode.children) {
        startingNode.children.forEach(node => {
            depthFirstPreOrder(node, callback);
        })
    }
};

const depthFirstPostOrder = (startingNode, callback) => {
    if(startingNode.title) {
        if(startingNode.children) {
            startingNode.children.forEach(node => {
                depthFirstPostOrder(node, callback);
            });
        }
        callback(startingNode);
    }
};

const resultBreadthFirst = [];
const resultDepthFirstPre = [];
const resultDepthFirstPost = [];

breadthFirst(tree, (node => {
   return resultBreadthFirst.push(node.title);
}));

depthFirstPreOrder(tree, (node => {
    return resultDepthFirstPre.push(node.title);
}));

depthFirstPostOrder(tree, (node => {
    return resultDepthFirstPost.push(node.title);
}));

console.log(resultBreadthFirst);
console.log(resultDepthFirstPre);
console.log(resultDepthFirstPost);
