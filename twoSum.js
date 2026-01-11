/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// Optimal Solution
var twoSum = function (nums, target) {
    const numberToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];
 
        if (numberToIndex[numberNeeded] !== undefined) {
            return [i, numberToIndex[numberNeeded]];
        }

        numberToIndex[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
