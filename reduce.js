/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let value = init;

    if (nums.length <= 0) {
        return init;
    }

    for (let i = 0; i < nums.length; i++) {
        
        const element = nums[i];

        value = fn(value, element);        

        console.log(value);
        
    }


};

const newReduce = reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
        return accum + curr * curr
    },
    100
);
console.log(newReduce);
