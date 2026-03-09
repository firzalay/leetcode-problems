/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
    
        currentCount += nums[i]

        if (nums[i] == 0) {
            currentCount = 0
        }
        
        if (currentCount >= maxConsecutive) {
            maxConsecutive = currentCount
        }


        
    }

    return maxConsecutive
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))

