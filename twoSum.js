/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// let twoSum = function (nums, target) {
//     const numberMapped = {};

//     for (let i = 0; i < nums.length; i++) {
//         const numberNeeded = target - nums[i];
 
//         if (numberMapped[numberNeeded] !== undefined) {
//             return [numberMapped[numberNeeded], i];
//         }

//         numberMapped[nums[i]] = i;
//     }
// };


// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
            
//         }
//     }    
// }




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let numTarget = target - n
        
        if (map.has(numTarget)) {
            return [map.get(numTarget), i]
        }

        map.set(n, i)


    }

    return map

    
};
console.log(twoSum([2, 7, 11, 15], 9));



























// Optimal Solution


