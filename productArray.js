/**
 * @return {number[]}
 * @param {number[]} nums
 */
var productExceptSelf = function (nums) {
    var temp = [];

    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        temp[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        temp[i] *= product;
        product *= nums[i];
    }

    return temp;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]
