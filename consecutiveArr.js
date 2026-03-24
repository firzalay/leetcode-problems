/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let startNum = num;
            let currentStreak = 1;

            while (set.has(startNum + 1)) {
                startNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        
        }
    }



    return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
