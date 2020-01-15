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

function depthFirstIterative(root, callback) {
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.shift();
        callback(node);
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                let child = node.children[i];
                if (!child.discovered) {
                    child.discovered = true;
                    stack.unshift(child);
                }
            }
        }
    }
}

const resultDepthFirst = [];

depthFirstIterative(tree, function (node) {
    resultDepthFirst.push(node.title)
});

console.log(resultDepthFirst);
