/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

 

var buildArray = function (target, n) {
    let stack = [];
    let current = 0; // 2,

    for (let i = 1; i <= n && current < target.length; i++) {
        if (target[current] == i) {
            stack.push("Push");
            current++;
        } else {
            stack.push("Push");
            stack.push("Pop");
        }

    }

    return stack;
};

