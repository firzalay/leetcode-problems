/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stack = [];
    let indexArr = 0;

    for (let i = 1; i <= n; i++) {
        if (indexArr == target.length) {
            return stack;
        }
        
        if (i == target[indexArr]) {
            stack.push("Push")
        } else {
            indexArr++;
            stack.push("Push")
            stack.push("Pop")
        }
    }

    return stack;
};

console.log(buildArray([1, 3], 3));
